// package: chat
// file: chat/chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_chat_pb from "../chat/chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribeToChat: IChatServiceService_ISubscribeToChat;
    sendMessage: IChatServiceService_ISendMessage;
    unsubscribeFromChat: IChatServiceService_IUnsubscribeFromChat;
}

interface IChatServiceService_ISubscribeToChat extends grpc.MethodDefinition<chat_chat_pb.SubscribeToChatRequest, chat_chat_pb.Message> {
    path: "/chat.ChatService/SubscribeToChat";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_chat_pb.SubscribeToChatRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.SubscribeToChatRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.Message>;
}
interface IChatServiceService_ISendMessage extends grpc.MethodDefinition<chat_chat_pb.Message, chat_chat_pb.SendMessageResponse> {
    path: "/chat.ChatService/SendMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_chat_pb.Message>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.Message>;
    responseSerialize: grpc.serialize<chat_chat_pb.SendMessageResponse>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.SendMessageResponse>;
}
interface IChatServiceService_IUnsubscribeFromChat extends grpc.MethodDefinition<chat_chat_pb.UnsubscribeFromChatRequest, chat_chat_pb.UnsubscribeFromChatResponse> {
    path: "/chat.ChatService/UnsubscribeFromChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_chat_pb.UnsubscribeFromChatRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.UnsubscribeFromChatRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.UnsubscribeFromChatResponse>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.UnsubscribeFromChatResponse>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer {
    subscribeToChat: grpc.handleServerStreamingCall<chat_chat_pb.SubscribeToChatRequest, chat_chat_pb.Message>;
    sendMessage: grpc.handleUnaryCall<chat_chat_pb.Message, chat_chat_pb.SendMessageResponse>;
    unsubscribeFromChat: grpc.handleUnaryCall<chat_chat_pb.UnsubscribeFromChatRequest, chat_chat_pb.UnsubscribeFromChatResponse>;
}

export interface IChatServiceClient {
    subscribeToChat(request: chat_chat_pb.SubscribeToChatRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    subscribeToChat(request: chat_chat_pb.SubscribeToChatRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    sendMessage(request: chat_chat_pb.Message, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: chat_chat_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: chat_chat_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    unsubscribeFromChat(request: chat_chat_pb.UnsubscribeFromChatRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.UnsubscribeFromChatResponse) => void): grpc.ClientUnaryCall;
    unsubscribeFromChat(request: chat_chat_pb.UnsubscribeFromChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.UnsubscribeFromChatResponse) => void): grpc.ClientUnaryCall;
    unsubscribeFromChat(request: chat_chat_pb.UnsubscribeFromChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.UnsubscribeFromChatResponse) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public subscribeToChat(request: chat_chat_pb.SubscribeToChatRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    public subscribeToChat(request: chat_chat_pb.SubscribeToChatRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    public sendMessage(request: chat_chat_pb.Message, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: chat_chat_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: chat_chat_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public unsubscribeFromChat(request: chat_chat_pb.UnsubscribeFromChatRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.UnsubscribeFromChatResponse) => void): grpc.ClientUnaryCall;
    public unsubscribeFromChat(request: chat_chat_pb.UnsubscribeFromChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.UnsubscribeFromChatResponse) => void): grpc.ClientUnaryCall;
    public unsubscribeFromChat(request: chat_chat_pb.UnsubscribeFromChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.UnsubscribeFromChatResponse) => void): grpc.ClientUnaryCall;
}
