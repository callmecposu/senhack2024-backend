import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import { UpdateUserRequest, User } from "../../protos/out/user/user_pb";
import { UserInfo } from "../../protos/out/user/user_pb";
import UserModel from "../../models/user";

// Update User
const updateUser = async (
    call: ServerUnaryCall<UpdateUserRequest, User>,
    callback: sendUnaryData<User>
) => {
    const request = call.request;
    try {
        // Find the user in the database by id
        const id = request.getId();
        const user = await UserModel.findById(id);
    
        if(user){    
            // Update the user
            const response = await user?.updateOne({
                bio: request.getBio(),
                aboutUser: {
                    interests: request.getAboutUser()?.getInterestsList(),
                    nativeLanguages: request.getAboutUser()?.getNativeLang(),
                    otherLanguages: request.getAboutUser()?.getOtherLangsList(),
                    personalityType: request.getAboutUser()?.getPersonalityType()
                },
                roomatePreferences: {
                    interests: request.getPreferences()?.getInterestsList(),
                    nativeLanguages: request.getPreferences()?.getNativeLang(),
                    otherLanguages: request.getPreferences()?.getOtherLangsList(),
                    personalityType: request.getPreferences()?.getPersonalityType()
                },
            })

            const responseUser = new User();
            responseUser.setId(user?._id.toString());
            responseUser.setEmail(user?.email);
            responseUser.setFirstName(user?.fName);
            responseUser.setLastName(user?.lName);
            responseUser.setAnonName(user?.anonName);
            responseUser.setBio(user?.bio);
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