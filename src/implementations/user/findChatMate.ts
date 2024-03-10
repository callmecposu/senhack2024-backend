import { sendUnaryData, status, ServerUnaryCall } from "@grpc/grpc-js";
import { FindChatMateRequest } from "../../protos/out/user/user_pb";
import { User, UserInfo } from "../../protos/out/user/user_pb";
import UserModel from "../../models/user";
import similarity from "compute-cosine-similarity";

const findChatMate = async (
    call: ServerUnaryCall<FindChatMateRequest, User>,
    callback: sendUnaryData<User>
) => {
    const request = call.request;
    try {
        // Find the user in the database by id
        const id = request.getUserId();
        const currentUser = await UserModel.findById(id);

        if(!currentUser){
            callback({code: status.NOT_FOUND, message: "User not found"});
            return;
        }

        const allUsers = await UserModel.find({ _id: { $ne: id } }); 
        let usersWithScores = [];

        for(let i = 0; i < allUsers.length; i++){
            let userWithScore: any = Object.assign({}, allUsers[i]);
            userWithScore.score = 0;

            // Count the number of common interests
            const commonInterests = currentUser.aboutUser.interests.filter(interest => userWithScore._doc.aboutUser.interests.includes(interest));
            userWithScore.score += commonInterests.length*1.5;

            // Count the number of common native languages
            const commonNativeLanguages = currentUser.aboutUser.nativeLanguages.filter(language => userWithScore._doc.aboutUser.nativeLanguages.includes(language));
            userWithScore.score += commonNativeLanguages.length*1.2;

            // Count the number of common other languages
            const commonOtherLanguages = currentUser.aboutUser.otherLanguages.filter(language => userWithScore._doc.aboutUser.otherLanguages.includes(language));
            userWithScore.score += commonOtherLanguages.length;

            // Count the number of common personality types
            if(currentUser.aboutUser.personalityType === userWithScore._doc.aboutUser.personalityType){
                userWithScore.score += 1.3;
            }

            // Count the number of common roomate preferences interests
            const commonRoomatePreferencesInterests = currentUser.roomatePreferences.interests.filter(interest => userWithScore._doc.aboutUser.interests.includes(interest));
            userWithScore.score += commonRoomatePreferencesInterests.length*1.7;

            // Count the number of common roomate preferences native languages
            const commonRoomatePreferencesNativeLanguages = currentUser.roomatePreferences.nativeLanguages.filter(language => userWithScore._doc.aboutUser.nativeLanguages.includes(language));
            userWithScore.score += commonRoomatePreferencesNativeLanguages.length*1.4;

            // Count the number of common roomate preferences other languages
            const commonRoomatePreferencesOtherLanguages = currentUser.roomatePreferences.otherLanguages.filter(language => userWithScore._doc.aboutUser.otherLanguages.includes(language));
            userWithScore.score += commonRoomatePreferencesOtherLanguages.length*1.1;

            // Count the number of common roomate preferences personality types
            if(currentUser.roomatePreferences.personalityType === userWithScore._doc.aboutUser.personalityType){
                userWithScore.score += 1.6;
            }

            // Calculate the similarity between the two users' bios
            if(currentUser.embeddings.length == userWithScore._doc.embeddings.length){
                const similarityScore = similarity(currentUser.embeddings, userWithScore._doc.embeddings) || 0;
                userWithScore.score += similarityScore*2;
            }

            userWithScore.score *= 10;

            usersWithScores.push(userWithScore);
        }

        let usersPool = [];
        for(let i = 0; i < usersWithScores.length; i++){
            for(let j = 0; j < usersWithScores[i].score; j++){
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

        responseUserInfo.setInterestsList(chatMate?.aboutUser.interests.map(interest => Number(interest)));
        responseUserInfo.setNativeLangsList(chatMate?.aboutUser.nativeLanguages.map(interest => Number(interest)));
        responseUserInfo.setOtherLangsList(chatMate?.aboutUser.otherLanguages.map(interest => Number(interest)));
        responseUserInfo.setPersonalityType(Number(chatMate?.aboutUser.personalityType));

        responseUser.setAboutUser(responseUserInfo);

        callback(null, responseUser);
    }
    catch (error: any) {
        console.error("Something went wrong during user: ", error.message);
        callback({code: status.INTERNAL, message: error.message})
    }
}

export default findChatMate;