import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import { UpdateUserRequest, User } from "../../protos/out/user/user_pb";

// Update User
const updateUser = (
    call: ServerUnaryCall<UpdateUserRequest, User>,
    callback: sendUnaryData<User>
) => {
    const request = call.request;
    try {
        // Find the user in the database and update the user
        const user = new User();
        

        // Return the updated user
        callback(null, user);
    }
    catch (error: any) {
        console.error("Something went wrong during user: ", error.message);
        callback({code: status.INTERNAL, message: error.message})
    }
}

export default updateUser;