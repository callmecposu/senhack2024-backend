import { ServerUnaryCall, sendUnaryData, status } from '@grpc/grpc-js'
import * as pb from '../../protos/out/user/user_pb'

const createUser = (call: ServerUnaryCall<pb.CreateUserRequest, pb.User>, callback: sendUnaryData<pb.User>) => {
    const req = call.request;
    try {
        // if the user with such email already exists, return an error
        
    } catch (err:any){
        console.log(err)
        callback({code: status.INTERNAL, message: err.message})
    }
}