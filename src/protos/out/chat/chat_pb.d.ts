// package: chat
// file: chat/chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Message extends jspb.Message { 
    getCondoId(): string;
    setCondoId(value: string): Message;
    getUserId(): string;
    setUserId(value: string): Message;
    getUserFirstName(): string;
    setUserFirstName(value: string): Message;
    getUserLastName(): string;
    setUserLastName(value: string): Message;
    getContent(): string;
    setContent(value: string): Message;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        condoId: string,
        userId: string,
        userFirstName: string,
        userLastName: string,
        content: string,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SubscribeToChatRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): SubscribeToChatRequest;
    getCondoId(): string;
    setCondoId(value: string): SubscribeToChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToChatRequest): SubscribeToChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToChatRequest;
    static deserializeBinaryFromReader(message: SubscribeToChatRequest, reader: jspb.BinaryReader): SubscribeToChatRequest;
}

export namespace SubscribeToChatRequest {
    export type AsObject = {
        userId: string,
        condoId: string,
    }
}

export class SendMessageResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
    static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
    export type AsObject = {
    }
}

export class UnsubscribeFromChatRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UnsubscribeFromChatRequest;
    getCondoId(): string;
    setCondoId(value: string): UnsubscribeFromChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsubscribeFromChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnsubscribeFromChatRequest): UnsubscribeFromChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsubscribeFromChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsubscribeFromChatRequest;
    static deserializeBinaryFromReader(message: UnsubscribeFromChatRequest, reader: jspb.BinaryReader): UnsubscribeFromChatRequest;
}

export namespace UnsubscribeFromChatRequest {
    export type AsObject = {
        userId: string,
        condoId: string,
    }
}

export class UnsubscribeFromChatResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsubscribeFromChatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnsubscribeFromChatResponse): UnsubscribeFromChatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsubscribeFromChatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsubscribeFromChatResponse;
    static deserializeBinaryFromReader(message: UnsubscribeFromChatResponse, reader: jspb.BinaryReader): UnsubscribeFromChatResponse;
}

export namespace UnsubscribeFromChatResponse {
    export type AsObject = {
    }
}
