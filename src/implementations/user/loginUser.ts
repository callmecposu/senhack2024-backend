import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/user/user_pb";
import UserModel from "../../models/user";
import bcrypt from "bcrypt";

const loginUser = async (
    call: ServerUnaryCall<pb.LoginUserRequest, pb.User>,
    callback: sendUnaryData<pb.User>
) => {
    const req = call.request;
    try {
        // if the user with given email does not exist, return an error
        const userWithGivenEmail = await UserModel.findOne({
            email: req.getEmail(),
        });
        if (!userWithGivenEmail) {
            callback({
                code: status.NOT_FOUND,
                message: `User with email \'${req.getEmail()}\' does not exist!`,
            });
            return;
        }
        // check the password
        const pwMatch = await bcrypt.compare(
            req.getPassword(),
            userWithGivenEmail.password
        );
        // if the passwords do not match, return an error
        if (!pwMatch) {
            callback({
                code: status.PERMISSION_DENIED,
                message: "Incorrect password!",
            });
            return;
        }
        // return the user object
        const respUser = new pb.User();
        respUser.setId(userWithGivenEmail._id.toString());
        respUser.setEmail(userWithGivenEmail.email);
        respUser.setFirstName(userWithGivenEmail.fName);
        respUser.setLastName(userWithGivenEmail.lName);
        respUser.setAnonName(userWithGivenEmail.anonName);
        respUser.setBio(userWithGivenEmail.bio);
        respUser.setEducation(userWithGivenEmail.education);
        respUser.setSocialMediaList(userWithGivenEmail.socialMedia)
        const aboutUser = new pb.UserInfo();
        userWithGivenEmail.aboutUser.interests.forEach((interest) => {
            aboutUser.addInterests(Number(interest));
        });
        userWithGivenEmail.aboutUser.nativeLanguages.forEach((lang) => {
            aboutUser.addNativeLangs(Number(lang));
        });
        userWithGivenEmail.aboutUser.otherLanguages.forEach((lang) => {
            aboutUser.addOtherLangs(Number(lang));
        });
        aboutUser.setDrinkingInfo(Number(userWithGivenEmail.aboutUser.drinkingInfo))
        aboutUser.setSmokingInfo(Number(userWithGivenEmail.aboutUser.smokingInfo))
        aboutUser.setPetInfo(Number(userWithGivenEmail.aboutUser.petInfo))
        aboutUser.setPersonalityType(
            Number(userWithGivenEmail.aboutUser.personalityType)
        );
        respUser.setAboutUser(aboutUser);
        const preferences = new pb.UserInfo();
        userWithGivenEmail.roomatePreferences.interests.forEach((interest) => {
            preferences.addInterests(Number(interest));
        });
        userWithGivenEmail.roomatePreferences.nativeLanguages.forEach(
            (lang) => {
                preferences.addNativeLangs(Number(lang));
            }
        );
        userWithGivenEmail.roomatePreferences.otherLanguages.forEach((lang) => {
            preferences.addOtherLangs(Number(lang));
        });
        preferences.setDrinkingInfo(Number(userWithGivenEmail.roomatePreferences.drinkingInfo))
        preferences.setSmokingInfo(Number(userWithGivenEmail.roomatePreferences.smokingInfo))
        preferences.setPetInfo(Number(userWithGivenEmail.roomatePreferences.petInfo))
        preferences.setPersonalityType(
            Number(userWithGivenEmail.roomatePreferences.personalityType)
        );
        respUser.setPreferences(preferences)
        respUser.setBlockListList(userWithGivenEmail.blockList)
        respUser.setNotInterestedList(userWithGivenEmail.notInterested)
        // send the response
        callback(null, respUser)
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default loginUser