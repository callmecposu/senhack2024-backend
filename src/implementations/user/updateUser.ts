import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import { UpdateUserRequest, User } from "../../protos/out/user/user_pb";
import UserModel from "../../models/user";
import OpenAI from "openai";
require("dotenv").config();

const openai = new OpenAI({apiKey: process.env.OPENAPI_KEY});

// Update User
const updateUser = async (
    call: ServerUnaryCall<UpdateUserRequest, User>,
    callback: sendUnaryData<User>
) => {
    const request = call.request;
    try {
        // Find the user in the database by id
        const id = request.getId();
        let user = await UserModel.findById(id);
    
        if(user){    
            // Generate embeddings
            const bioEmbedding = request.getBio() !== user.bio ?(await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: request.getBio() || '',
                encoding_format: "float",
            })).data[0].embedding : user.embeddings;

            // Update the user
            // user.bio = request.getBio()
            // user.education = request.getEducation()
            // user.socialMedia = request.getSocialMediaList();
            // user.aboutUser = {
            //     interests: request.getAboutUser()?.getInterestsList(),

            // }
            
            const response = await UserModel.updateOne({_id: user._id}, {
                bio: request.getBio(),
                education: request.getEducation(),
                socialMedia: request.getSocialMediaList(),
                aboutUser: {
                    interests: request.getAboutUser()?.getInterestsList(),
                    nativeLanguages: request.getAboutUser()?.getNativeLangsList(),
                    otherLanguages: request.getAboutUser()?.getOtherLangsList(),
                    personalityType: request.getAboutUser()?.getPersonalityType(),
                    drinkingInfo: request.getAboutUser()?.getDrinkingInfo(),
                    smokingInfo: request.getAboutUser()?.getSmokingInfo(),
                    petInfo: request.getAboutUser()?.getPetInfo(),
                },
                roomatePreferences: {
                    interests: request.getPreferences()?.getInterestsList(),
                    nativeLanguages: request.getPreferences()?.getNativeLangsList(),
                    otherLanguages: request.getPreferences()?.getOtherLangsList(),
                    personalityType: request.getPreferences()?.getPersonalityType(),
                    drinkingInfo: request.getAboutUser()?.getDrinkingInfo(),
                    smokingInfo: request.getAboutUser()?.getSmokingInfo(),
                    petInfo: request.getAboutUser()?.getPetInfo(),
                },
                embeddings: bioEmbedding
            }, )

            const responseUser = new User();
            responseUser.setId(user?._id.toString());
            responseUser.setEmail(user?.email);
            responseUser.setFirstName(user?.fName);
            responseUser.setLastName(user?.lName);
            responseUser.setAnonName(user?.anonName);
            responseUser.setBio(request.getBio() as string);
            responseUser.setEducation(request.getEducation()),
            responseUser.setSocialMediaList(request.getSocialMediaList())
            responseUser.setAboutUser(request.getAboutUser());
            responseUser.setPreferences(request.getPreferences());
            responseUser.setBlockListList(user?.blockList);
            responseUser.setNotInterestedList(user?.notInterested);
            
            // Return the updated user
            callback(null, responseUser);  
        }
        else {
            callback({code: status.NOT_FOUND, message: "User not found"});
        }
    }
    catch (error: any) {
        console.error("Something went wrong during user: ", error.message);
        callback({code: status.INTERNAL, message: error.message})
    }
}

export default updateUser;