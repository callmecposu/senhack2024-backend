// package: 
// file: chat/chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Chat extends jspb.Message { 
    getId(): string;
    setId(value: string): Chat;
    getDateCreated(): string;
    setDateCreated(value: string): Chat;
    clearUsersList(): void;
    getUsersList(): Array<ShortUserInfo>;
    setUsersList(value: Array<ShortUserInfo>): Chat;
    addUsers(value?: ShortUserInfo, index?: number): ShortUserInfo;
    clearRevealIdentityList(): void;
    getRevealIdentityList(): Array<string>;
    setRevealIdentityList(value: Array<string>): Chat;
    addRevealIdentity(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chat.AsObject;
    static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chat;
    static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
    export type AsObject = {
        id: string,
        dateCreated: string,
        usersList: Array<ShortUserInfo.AsObject>,
        revealIdentityList: Array<string>,
    }
}

export class ShortUserInfo extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): ShortUserInfo;
    getDisplayName(): string;
    setDisplayName(value: string): ShortUserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShortUserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ShortUserInfo): ShortUserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShortUserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShortUserInfo;
    static deserializeBinaryFromReader(message: ShortUserInfo, reader: jspb.BinaryReader): ShortUserInfo;
}

export namespace ShortUserInfo {
    export type AsObject = {
        userId: string,
        displayName: string,
    }
}

export class Message extends jspb.Message { 
    getId(): string;
    setId(value: string): Message;
    getDate(): string;
    setDate(value: string): Message;
    getSenderId(): string;
    setSenderId(value: string): Message;
    getReceiverId(): string;
    setReceiverId(value: string): Message;
    getContent(): string;
    setContent(value: string): Message;
    getChatId(): string;
    setChatId(value: string): Message;

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
        id: string,
        date: string,
        senderId: string,
        receiverId: string,
        content: string,
        chatId: string,
    }
}

export class CreateChatRequest extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<string>;
    setUsersList(value: Array<string>): CreateChatRequest;
    addUsers(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateChatRequest): CreateChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateChatRequest;
    static deserializeBinaryFromReader(message: CreateChatRequest, reader: jspb.BinaryReader): CreateChatRequest;
}

export namespace CreateChatRequest {
    export type AsObject = {
        usersList: Array<string>,
    }
}

export class DeleteChatRequest extends jspb.Message { 
    getChatId(): string;
    setChatId(value: string): DeleteChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteChatRequest): DeleteChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteChatRequest;
    static deserializeBinaryFromReader(message: DeleteChatRequest, reader: jspb.BinaryReader): DeleteChatRequest;
}

export namespace DeleteChatRequest {
    export type AsObject = {
        chatId: string,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class SendMessageRequest extends jspb.Message { 
    getSenderId(): string;
    setSenderId(value: string): SendMessageRequest;
    getReceiverId(): string;
    setReceiverId(value: string): SendMessageRequest;
    getChatId(): string;
    setChatId(value: string): SendMessageRequest;
    getContent(): string;
    setContent(value: string): SendMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
    static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
    export type AsObject = {
        senderId: string,
        receiverId: string,
        chatId: string,
        content: string,
    }
}
