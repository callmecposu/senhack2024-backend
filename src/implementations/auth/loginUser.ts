import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/auth/auth_pb";
import User from "../../models/user";
import bcrypt from "bcrypt";

const loginUser = async (
    call: ServerUnaryCall<pb.LoginUserRequest, pb.LoginUserResponse>,
    callback: sendUnaryData<pb.LoginUserResponse>
) => {
    const req = call.request;
    try {
        // find the user with given email
        const userWithGivenEmail = await User.findOne({
            email: req.getEmail(),
        });
        if (!userWithGivenEmail) {
            callback({
                code: status.NOT_FOUND,
                message: `User with email \'${req.getEmail()}\' does not exist!`,
            });
            return;
        }
        // compare the passwords
        const compareRes = await bcrypt.compare(
            req.getPassword(),
            userWithGivenEmail?.password as string
        );
        if (!compareRes) {
            callback({
                code: status.PERMISSION_DENIED,
                message: "Passwords do not match!",
            });
            return;
        }
        // if passwords match, return the user object
        const response = new pb.LoginUserResponse()
        const respUser = new pb.User()
        respUser.setCondoId(userWithGivenEmail.condo_id)
        respUser.setFirstName(userWithGivenEmail.first_name)
        respUser.setLastName(userWithGivenEmail.last_name)
        respUser.setPhoneNumber(userWithGivenEmail.phone_number)
        respUser.setUnit(userWithGivenEmail.unit)
        respUser.setEmail(userWithGivenEmail.email)
        response.setUser(respUser)
        callback(null, response)
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default loginUser