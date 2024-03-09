// package: 
// file: chat/chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_chat_pb from "../chat/chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createChat: IChatServiceService_ICreateChat;
    deleteChat: IChatServiceService_IDeleteChat;
    sendMessage: IChatServiceService_ISendMessage;
}

interface IChatServiceService_ICreateChat extends grpc.MethodDefinition<chat_chat_pb.CreateChatRequest, chat_chat_pb.Chat> {
    path: "/ChatService/CreateChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_chat_pb.CreateChatRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.CreateChatRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.Chat>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.Chat>;
}
interface IChatServiceService_IDeleteChat extends grpc.MethodDefinition<chat_chat_pb.DeleteChatRequest, chat_chat_pb.Empty> {
    path: "/ChatService/DeleteChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_chat_pb.DeleteChatRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.DeleteChatRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.Empty>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.Empty>;
}
interface IChatServiceService_ISendMessage extends grpc.MethodDefinition<chat_chat_pb.SendMessageRequest, chat_chat_pb.Message> {
    path: "/ChatService/SendMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_chat_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.Message>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer {
    createChat: grpc.handleUnaryCall<chat_chat_pb.CreateChatRequest, chat_chat_pb.Chat>;
    deleteChat: grpc.handleUnaryCall<chat_chat_pb.DeleteChatRequest, chat_chat_pb.Empty>;
    sendMessage: grpc.handleUnaryCall<chat_chat_pb.SendMessageRequest, chat_chat_pb.Message>;
}

export interface IChatServiceClient {
    createChat(request: chat_chat_pb.CreateChatRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Chat) => void): grpc.ClientUnaryCall;
    createChat(request: chat_chat_pb.CreateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Chat) => void): grpc.ClientUnaryCall;
    createChat(request: chat_chat_pb.CreateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Chat) => void): grpc.ClientUnaryCall;
    deleteChat(request: chat_chat_pb.DeleteChatRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteChat(request: chat_chat_pb.DeleteChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteChat(request: chat_chat_pb.DeleteChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMessage(request: chat_chat_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Message) => void): grpc.ClientUnaryCall;
    sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Message) => void): grpc.ClientUnaryCall;
    sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Message) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createChat(request: chat_chat_pb.CreateChatRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Chat) => void): grpc.ClientUnaryCall;
    public createChat(request: chat_chat_pb.CreateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Chat) => void): grpc.ClientUnaryCall;
    public createChat(request: chat_chat_pb.CreateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Chat) => void): grpc.ClientUnaryCall;
    public deleteChat(request: chat_chat_pb.DeleteChatRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteChat(request: chat_chat_pb.DeleteChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteChat(request: chat_chat_pb.DeleteChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMessage(request: chat_chat_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Message) => void): grpc.ClientUnaryCall;
    public sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Message) => void): grpc.ClientUnaryCall;
    public sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Message) => void): grpc.ClientUnaryCall;
}
