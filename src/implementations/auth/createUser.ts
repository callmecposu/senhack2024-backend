import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/auth/auth_pb";
import User from "../../models/user";
import bcrypt from "bcrypt";
import CondoAccessCode from "../../models/condoAccessCode";

const createUser = async (
    call: ServerUnaryCall<pb.CreateUserRequest, pb.CreateUserResponse>,
    callback: sendUnaryData<pb.CreateUserResponse>
) => {
    const req = call.request;
    // if user with such email already exists, return an error
    const userWithGivenEmail: any = await User.findOne({ email: req.getEmail() });
    if (userWithGivenEmail) {
        callback({
            code: status.ALREADY_EXISTS,
            message: `Email \'${req.getEmail()}\' is already taken!`,
        });
        return
    }
    // verify the condo access code
    //   if the access code does not exist, return an error
    const accessCode = await CondoAccessCode.findOne({
        code: req.getCondoAccessCode(),
    });
    if (!accessCode) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: `Access code \'${req.getCondoAccessCode()}\' does not exist!`,
        });
        return
    }
    // hash user's password
    const hashedPwd = await bcrypt.hash(req.getPassword(), 10);
    console.log("hashed Password: ", hashedPwd);
    // create the new user
    const user = new User({
        condo_id: accessCode?.condo_id,
        first_name: req.getFirstName(),
        last_name: req.getLastName(),
        password: hashedPwd,
        phone_number: req.getPhoneNumber(),
        email: req.getEmail()
    })
    const newUser = await user.save()
    console.log('newUser: ', newUser)
    // delete the used condo access code
    const deleteCodeRes = await CondoAccessCode.deleteOne({_id: accessCode?._id})
    console.log('delete condo access code res: ', deleteCodeRes)
    // return the new user
    const response = new pb.CreateUserResponse()
    const respUser = new pb.User()
    respUser.setId(newUser._id.toString())
    respUser.setCondoId(newUser.condo_id)
    respUser.setFirstName(newUser.first_name)
    respUser.setLastName(newUser.last_name)
    respUser.setPhoneNumber(newUser.phone_number)
    respUser.setEmail(newUser.email)
    console.log(respUser.toObject())
    response.setUser(respUser)
    callback(null, response)

};

export default createUser;
