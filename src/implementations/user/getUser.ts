import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/user/user_pb";
import UserModel from "../../models/user";

const getUser = async (
    call: ServerUnaryCall<pb.GetUserRequest, pb.User>,
    callback: sendUnaryData<pb.User>
) => {
    const req = call.request;
    try {
        // find the user with given ID in the database
        const user = await UserModel.findOne({ _id: req.getUserId()});
        if (!user) {
            callback({
                code: status.NOT_FOUND,
                message: `User with ID \'${req.getUserId()}\' does not exist!`,
            });
            return;
        }
        // create the response
        const respUser = new pb.User();
        respUser.setId(user._id.toString());
        respUser.setEmail(user.email);
        respUser.setFirstName(user.fName);
        respUser.setLastName(user.lName);
        respUser.setAnonName(user.anonName);
        respUser.setBio(user.bio);
        respUser.setEducation(user.education);
        respUser.setSocialMediaList(user.socialMedia)
        const aboutUser = new pb.UserInfo();
        user.aboutUser.interests.forEach((interest) => {
            aboutUser.addInterests(Number(interest));
        });
        user.aboutUser.nativeLanguages.forEach((lang) => {
            aboutUser.addNativeLangs(Number(lang));
        });
        user.aboutUser.otherLanguages.forEach((lang) => {
            aboutUser.addOtherLangs(Number(lang));
        });
        aboutUser.setDrinkingInfo(Number(user.aboutUser.drinkingInfo))
        aboutUser.setSmokingInfo(Number(user.aboutUser.smokingInfo))
        aboutUser.setPetInfo(Number(user.aboutUser.petInfo))
        aboutUser.setPersonalityType(Number(user.aboutUser.personalityType));
        respUser.setAboutUser(aboutUser);
        const preferences = new pb.UserInfo();
        user.roomatePreferences.interests.forEach((interest) => {
            preferences.addInterests(Number(interest));
        });
        user.roomatePreferences.nativeLanguages.forEach((lang) => {
            preferences.addNativeLangs(Number(lang));
        });
        user.roomatePreferences.otherLanguages.forEach((lang) => {
            preferences.addOtherLangs(Number(lang));
        });
        preferences.setDrinkingInfo(Number(user.roomatePreferences.drinkingInfo))
        preferences.setSmokingInfo(Number(user.roomatePreferences.smokingInfo))
        preferences.setPetInfo(Number(user.roomatePreferences.petInfo))
        preferences.setPersonalityType(
            Number(user.roomatePreferences.personalityType)
        );
        respUser.setPreferences(preferences);
        respUser.setBlockListList(user.blockList);
        respUser.setNotInterestedList(user.notInterested);
        console.log(respUser)
        console.log(respUser.toObject())
        // send the response
        callback(null, respUser);
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default getUser