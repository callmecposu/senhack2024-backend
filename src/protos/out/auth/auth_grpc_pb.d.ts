// package: auth
// file: auth/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_auth_pb from "../auth/auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IAuthServiceService_ICreateUser;
    loginUser: IAuthServiceService_ILoginUser;
}

interface IAuthServiceService_ICreateUser extends grpc.MethodDefinition<auth_auth_pb.CreateUserRequest, auth_auth_pb.CreateUserResponse> {
    path: "/auth.AuthService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.CreateUserResponse>;
}
interface IAuthServiceService_ILoginUser extends grpc.MethodDefinition<auth_auth_pb.LoginUserRequest, auth_auth_pb.LoginUserResponse> {
    path: "/auth.AuthService/LoginUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.LoginUserRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.LoginUserRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.LoginUserResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.LoginUserResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    createUser: grpc.handleUnaryCall<auth_auth_pb.CreateUserRequest, auth_auth_pb.CreateUserResponse>;
    loginUser: grpc.handleUnaryCall<auth_auth_pb.LoginUserRequest, auth_auth_pb.LoginUserResponse>;
}

export interface IAuthServiceClient {
    createUser(request: auth_auth_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: auth_auth_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: auth_auth_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: auth_auth_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: auth_auth_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: auth_auth_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: auth_auth_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: auth_auth_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: auth_auth_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: auth_auth_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: auth_auth_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: auth_auth_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
}
