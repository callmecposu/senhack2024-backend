import { sendUnaryData, status, ServerUnaryCall } from "@grpc/grpc-js";
import { FindChatMateRequest } from "../../protos/out/user/user_pb";
import { User, UserInfo } from "../../protos/out/user/user_pb";
import ChatModel from "../../models/chat";
import UserModel from "../../models/user";
import similarity from "compute-cosine-similarity";
import { MBTICompatibility, PersonalityType } from '../../constants/mbti';
import { compatibilityScore } from '../../constants/smoking-drinking'
import { compatibilityScore as petCompitabilityScore } from '../../constants/pet'

const VERBOSE = false;

const verboseLog = (message: string) => {
    if (VERBOSE) {
        console.log(message);
    }
};

const calculateMBTICompatibility = (mbti1: string, mbti2: string): number => {
    return (MBTICompatibility[mbti1][mbti2] || 0) * 40;
}

const calculateSmokingDrinkingCompatibility = (smoking1: number, drinking1: number, smoking2: number, drinking2: number): number => {
    return (compatibilityScore[smoking1][smoking2] || 0) + compatibilityScore[drinking1][drinking2];
}

const calculatePetCompitability = (pet1: number, pet2: number): number => {
    return (petCompitabilityScore[pet1][pet2] || 0);
}

function calculateProbabilities(usersWithScores: any[]): any[] {
    let meanScore = usersWithScores.reduce((sum, user) => sum + user.score, 0) / usersWithScores.length;
    
    let stdDev = Math.sqrt(usersWithScores.reduce((sum, user) => sum + Math.pow(user.score - meanScore, 2), 0) / usersWithScores.length);

    if (stdDev === 0) {
        usersWithScores.forEach(user => {
            user.probability = 0;
        });
    } else {
        usersWithScores.forEach(user => {
            const zScore = (user.score - meanScore) / stdDev;
            const probability = 1 / (stdDev * Math.sqrt(2 * Math.PI)) * Math.exp(-Math.pow(zScore, 2) / 2);
            user.probability = probability;
        });
    }

    const sumProbabilities = usersWithScores.reduce((sum, user) => sum + user.probability, 0);
    usersWithScores.forEach(user => {
        user.probability = user.probability / sumProbabilities * 100;
    });

    return usersWithScores;
}

    const findChatMate = async (
        call: ServerUnaryCall<FindChatMateRequest, User>,
        callback: sendUnaryData<User>
    ) => {
        const request = call.request;
        try {
            // Find the user in the database by id
            const id = request.getUserId();
            const currentUser = await UserModel.findById(id);
            
            let chats = await ChatModel.find();
            let chatIds = chats
            .filter(chat => chat.users[0]?.userID === id || chat.users[1]?.userID === id)
            .map(chat => chat.users.map(user => user?.userID));

            if(!currentUser){
                callback({code: status.NOT_FOUND, message: "User not found"});
                return;
            }

            const allUsers = await UserModel.find({ _id: { $ne: id } }); 
            let usersWithScores = [];

            for(let i = 0; i < allUsers.length; i++){
                let userWithScore: any = Object.assign({}, allUsers[i]);
                userWithScore.score = 0;

                if(chatIds.some(chatId => chatId.includes(userWithScore._doc._id.toString()))){
                    continue;
                }

                verboseLog("User: " + userWithScore._doc.anonName);

                // Personal matching

                // Count the number of common interests
                const commonInterests = currentUser.aboutUser.interests.filter(interest => userWithScore._doc.aboutUser.interests.includes(interest));
                userWithScore.score += commonInterests.length*10;
                verboseLog("Common Interests Score: " + commonInterests.length*10);

                // Count the number of common native languages
                const commonNativeLanguages = currentUser.aboutUser.nativeLanguages.filter(language => userWithScore._doc.aboutUser.nativeLanguages.includes(language));
                userWithScore.score += commonNativeLanguages.length*30;
                verboseLog("Common Native Languages Score: " + commonNativeLanguages.length*30);

                // Count the number of common native to other, other to native languages
                const commonNativeToOtherLanguages = currentUser.aboutUser.nativeLanguages.filter(language => userWithScore._doc.aboutUser.otherLanguages.includes(language));
                const commonOtherToNativeLanguages = currentUser.aboutUser.otherLanguages.filter(language => userWithScore._doc.aboutUser.nativeLanguages.includes(language));
                userWithScore.score += (commonNativeToOtherLanguages.length + commonOtherToNativeLanguages.length)*10;
                verboseLog("Common Native to Other, Other to Native Languages Score: " + (commonNativeToOtherLanguages.length + commonOtherToNativeLanguages.length)*10);

                // Count the number of common other languages
                const commonOtherLanguages = currentUser.aboutUser.otherLanguages.filter(language => userWithScore._doc.aboutUser.otherLanguages.includes(language));
                userWithScore.score += commonOtherLanguages.length*5;
                verboseLog("Common Other Languages Score: " + commonOtherLanguages.length*5);

                // Calculate personalit type compatibility
                let mbti1 = PersonalityType[Number(currentUser.aboutUser.personalityType)];
                let mbti2 = PersonalityType[Number(userWithScore._doc.aboutUser.personalityType)];
                userWithScore.score += calculateMBTICompatibility(mbti1, mbti2);
                verboseLog("MBTI Compatibility Score: " + calculateMBTICompatibility(mbti1, mbti2));

                // Calculate the similarity between the two users' bios
                if(currentUser.embeddings.length == userWithScore._doc.embeddings.length){
                    const similarityScore = similarity(currentUser.embeddings, userWithScore._doc.embeddings) || 0;
                    userWithScore.score += similarityScore*20;
                    verboseLog("Embeddings Similarity Score: " + similarityScore*20);
                }

                // Smoking drinking compitability score
                userWithScore.score += calculateSmokingDrinkingCompatibility(Number(currentUser.aboutUser.smokingInfo), Number(currentUser.aboutUser.drinkingInfo), Number(userWithScore._doc.aboutUser.smokingInfo), Number(userWithScore._doc.aboutUser.drinkingInfo));
                verboseLog("Smoking Drinking Compatibility Score: " + calculateSmokingDrinkingCompatibility(Number(currentUser.aboutUser.smokingInfo), Number(currentUser.aboutUser.drinkingInfo), Number(userWithScore._doc.aboutUser.smokingInfo), Number(userWithScore._doc.aboutUser.drinkingInfo)));

                // Pet compitability score
                userWithScore.score += calculatePetCompitability(Number(currentUser.aboutUser.petInfo), Number(userWithScore._doc.aboutUser.petInfo));
                verboseLog("Pet Compatibility Score: " + calculatePetCompitability(Number(currentUser.aboutUser.petInfo), Number(userWithScore._doc.aboutUser.petInfo)));

                // Preferences matching

                // Count the number of interests matching to preferences
                const matchingInterests = currentUser.roomatePreferences.interests.filter(interest => userWithScore._doc.aboutUser.interests.includes(interest));
                userWithScore.score += matchingInterests.length*15;
                verboseLog("Preference Interests Score: " + matchingInterests.length*15);

                // Count the number of native languages matching to preferences
                const matchingNativeLanguages = currentUser.roomatePreferences.nativeLanguages.filter(language => userWithScore._doc.aboutUser.nativeLanguages.includes(language));
                userWithScore.score += matchingNativeLanguages.length*40;
                verboseLog("Preference Native Languages Score: " + matchingNativeLanguages.length*40);

                // Count the number of native to other, other to native languages matching to preferences
                const matchingNativeToOtherLanguages = currentUser.roomatePreferences.nativeLanguages.filter(language => userWithScore._doc.aboutUser.otherLanguages.includes(language));
                const matchingOtherToNativeLanguages = currentUser.roomatePreferences.otherLanguages.filter(language => userWithScore._doc.aboutUser.nativeLanguages.includes(language));
                userWithScore.score += (matchingNativeToOtherLanguages.length + matchingOtherToNativeLanguages.length)*15;
                verboseLog("Preference Native to Other, Other to Native Languages Score: " + (matchingNativeToOtherLanguages.length + matchingOtherToNativeLanguages.length)*15);

                // Count the number of other languages matching to preferences
                const matchingOtherLanguages = currentUser.roomatePreferences.otherLanguages.filter(language => userWithScore._doc.aboutUser.otherLanguages.includes(language));
                userWithScore.score += matchingOtherLanguages.length*7;
                verboseLog("Preference Other Languages Score: " + matchingOtherLanguages.length*7);

                // Calculate personality type matching to preferences
                let preferedMbti1 = PersonalityType[Number(currentUser.roomatePreferences.personalityType)];
                userWithScore.score += calculateMBTICompatibility(preferedMbti1, mbti2)-20;
                verboseLog("Preference MBTI Compatibility Score: " + (calculateMBTICompatibility(preferedMbti1, mbti2)-20));

                // Calculate smoking drinking matching to preferences
                userWithScore.score += calculateSmokingDrinkingCompatibility(Number(currentUser.roomatePreferences.smokingInfo), Number(currentUser.roomatePreferences.drinkingInfo), Number(userWithScore._doc.aboutUser.smokingInfo), Number(userWithScore._doc.aboutUser.drinkingInfo));
                verboseLog("Preference Smoking Drinking Compatibility Score: " + calculateSmokingDrinkingCompatibility(Number(currentUser.roomatePreferences.smokingInfo), Number(currentUser.roomatePreferences.drinkingInfo), Number(userWithScore._doc.aboutUser.smokingInfo), Number(userWithScore._doc.aboutUser.drinkingInfo)));

                // Calculate pet matching to preferences
                userWithScore.score += calculatePetCompitability(Number(currentUser.roomatePreferences.petInfo), Number(userWithScore._doc.aboutUser.petInfo));
                verboseLog("Preference Pet Compatibility Score: " + calculatePetCompitability(Number(currentUser.roomatePreferences.petInfo), Number(userWithScore._doc.aboutUser.petInfo)));

                usersWithScores.push(userWithScore);
                verboseLog("Total Score: " + userWithScore.score);
                verboseLog("=====================================");
            }

            verboseLog("Scores: " + usersWithScores.map(user => user.score));

            usersWithScores = calculateProbabilities(usersWithScores);

            verboseLog("Normalized Scores: " + usersWithScores.map(user => user.probability));

            let usersPool = [];
            for(let i = 0; i < usersWithScores.length; i++){
                for(let j = 0; j < usersWithScores[i].probability; j++){
                    usersPool.push(usersWithScores[i]._doc._id.toString());
                }
            }

            const randomIndex = Math.floor(Math.random() * usersPool.length);
            const randomUserId = usersPool[randomIndex];
            const chatMate = allUsers.find(user => user._id.toString() === randomUserId);

            if(!chatMate){
                callback({code: status.NOT_FOUND, message: "Chat mate not found"});
                return;
            }
            
            const responseUser = new User();
            const responseUserInfo = new UserInfo();

            responseUser.setId(chatMate?._id.toString());
            responseUser.setEmail(chatMate?.email);
            responseUser.setAnonName(chatMate?.anonName);
            responseUser.setBio(chatMate?.bio);
            responseUser.setEducation(chatMate?.education);

            responseUserInfo.setInterestsList(chatMate?.aboutUser.interests.map(interest => Number(interest)));
            responseUserInfo.setNativeLangsList(chatMate?.aboutUser.nativeLanguages.map(interest => Number(interest)));
            responseUserInfo.setOtherLangsList(chatMate?.aboutUser.otherLanguages.map(interest => Number(interest)));
            responseUserInfo.setPersonalityType(Number(chatMate?.aboutUser.personalityType));
            responseUserInfo.setDrinkingInfo(Number(chatMate?.aboutUser.drinkingInfo));
            responseUserInfo.setSmokingInfo(Number(chatMate?.aboutUser.smokingInfo));
            responseUserInfo.setPetInfo(Number(chatMate?.aboutUser.petInfo));

            responseUser.setAboutUser(responseUserInfo);

            callback(null, responseUser);
        }
        catch (error: any) {
            console.error("Something went wrong during user: ", error.message);
            callback({code: status.INTERNAL, message: error.message})
        }
    }

    export default findChatMate;
