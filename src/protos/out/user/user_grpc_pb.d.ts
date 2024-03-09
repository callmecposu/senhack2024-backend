// package: user
// file: user/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_user_pb from "../user/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    loginUser: IUserServiceService_ILoginUser;
    updateUser: IUserServiceService_IUpdateUser;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<user_user_pb.CreateUserRequest, user_user_pb.User> {
    path: "/user.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<user_user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<user_user_pb.User>;
    responseDeserialize: grpc.deserialize<user_user_pb.User>;
}
interface IUserServiceService_ILoginUser extends grpc.MethodDefinition<user_user_pb.LoginUserRequest, user_user_pb.User> {
    path: "/user.UserService/LoginUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_pb.LoginUserRequest>;
    requestDeserialize: grpc.deserialize<user_user_pb.LoginUserRequest>;
    responseSerialize: grpc.serialize<user_user_pb.User>;
    responseDeserialize: grpc.deserialize<user_user_pb.User>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<user_user_pb.UpdateUserRequest, user_user_pb.User> {
    path: "/user.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<user_user_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<user_user_pb.User>;
    responseDeserialize: grpc.deserialize<user_user_pb.User>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<user_user_pb.CreateUserRequest, user_user_pb.User>;
    loginUser: grpc.handleUnaryCall<user_user_pb.LoginUserRequest, user_user_pb.User>;
    updateUser: grpc.handleUnaryCall<user_user_pb.UpdateUserRequest, user_user_pb.User>;
}

export interface IUserServiceClient {
    createUser(request: user_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    loginUser(request: user_user_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    loginUser(request: user_user_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    loginUser(request: user_user_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: user_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_user_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_user_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_user_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
}
