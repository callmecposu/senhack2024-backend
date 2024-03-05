// package: admin
// file: admin/admin.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as admin_admin_pb from "../admin/admin_pb";

interface IAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCondo: IAdminServiceService_ICreateCondo;
    createAccessCode: IAdminServiceService_ICreateAccessCode;
}

interface IAdminServiceService_ICreateCondo extends grpc.MethodDefinition<admin_admin_pb.CreateCondoRequest, admin_admin_pb.CreateCondoResponse> {
    path: "/admin.AdminService/CreateCondo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_admin_pb.CreateCondoRequest>;
    requestDeserialize: grpc.deserialize<admin_admin_pb.CreateCondoRequest>;
    responseSerialize: grpc.serialize<admin_admin_pb.CreateCondoResponse>;
    responseDeserialize: grpc.deserialize<admin_admin_pb.CreateCondoResponse>;
}
interface IAdminServiceService_ICreateAccessCode extends grpc.MethodDefinition<admin_admin_pb.CreateAccessCodeRequest, admin_admin_pb.CreateAccessCodeResponse> {
    path: "/admin.AdminService/CreateAccessCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_admin_pb.CreateAccessCodeRequest>;
    requestDeserialize: grpc.deserialize<admin_admin_pb.CreateAccessCodeRequest>;
    responseSerialize: grpc.serialize<admin_admin_pb.CreateAccessCodeResponse>;
    responseDeserialize: grpc.deserialize<admin_admin_pb.CreateAccessCodeResponse>;
}

export const AdminServiceService: IAdminServiceService;

export interface IAdminServiceServer {
    createCondo: grpc.handleUnaryCall<admin_admin_pb.CreateCondoRequest, admin_admin_pb.CreateCondoResponse>;
    createAccessCode: grpc.handleUnaryCall<admin_admin_pb.CreateAccessCodeRequest, admin_admin_pb.CreateAccessCodeResponse>;
}

export interface IAdminServiceClient {
    createCondo(request: admin_admin_pb.CreateCondoRequest, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateCondoResponse) => void): grpc.ClientUnaryCall;
    createCondo(request: admin_admin_pb.CreateCondoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateCondoResponse) => void): grpc.ClientUnaryCall;
    createCondo(request: admin_admin_pb.CreateCondoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateCondoResponse) => void): grpc.ClientUnaryCall;
    createAccessCode(request: admin_admin_pb.CreateAccessCodeRequest, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateAccessCodeResponse) => void): grpc.ClientUnaryCall;
    createAccessCode(request: admin_admin_pb.CreateAccessCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateAccessCodeResponse) => void): grpc.ClientUnaryCall;
    createAccessCode(request: admin_admin_pb.CreateAccessCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateAccessCodeResponse) => void): grpc.ClientUnaryCall;
}

export class AdminServiceClient extends grpc.Client implements IAdminServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createCondo(request: admin_admin_pb.CreateCondoRequest, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateCondoResponse) => void): grpc.ClientUnaryCall;
    public createCondo(request: admin_admin_pb.CreateCondoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateCondoResponse) => void): grpc.ClientUnaryCall;
    public createCondo(request: admin_admin_pb.CreateCondoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateCondoResponse) => void): grpc.ClientUnaryCall;
    public createAccessCode(request: admin_admin_pb.CreateAccessCodeRequest, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateAccessCodeResponse) => void): grpc.ClientUnaryCall;
    public createAccessCode(request: admin_admin_pb.CreateAccessCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateAccessCodeResponse) => void): grpc.ClientUnaryCall;
    public createAccessCode(request: admin_admin_pb.CreateAccessCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_admin_pb.CreateAccessCodeResponse) => void): grpc.ClientUnaryCall;
}
