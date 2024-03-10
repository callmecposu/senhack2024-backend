// package: 
// file: events/events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as chat_chat_pb from "../chat/chat_pb";

export class SubscribeToEventsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): SubscribeToEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToEventsRequest): SubscribeToEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToEventsRequest;
    static deserializeBinaryFromReader(message: SubscribeToEventsRequest, reader: jspb.BinaryReader): SubscribeToEventsRequest;
}

export namespace SubscribeToEventsRequest {
    export type AsObject = {
        userId: string,
    }
}

export class Event extends jspb.Message { 

    hasNewMessageEvent(): boolean;
    clearNewMessageEvent(): void;
    getNewMessageEvent(): NewMessageEvent | undefined;
    setNewMessageEvent(value?: NewMessageEvent): Event;

    hasNewChatEvent(): boolean;
    clearNewChatEvent(): void;
    getNewChatEvent(): NewChatEvent | undefined;
    setNewChatEvent(value?: NewChatEvent): Event;

    hasDeleteChatEvent(): boolean;
    clearDeleteChatEvent(): void;
    getDeleteChatEvent(): DeleteChatEvent | undefined;
    setDeleteChatEvent(value?: DeleteChatEvent): Event;

    hasUpdateChatEvent(): boolean;
    clearUpdateChatEvent(): void;
    getUpdateChatEvent(): UpdateChatEvent | undefined;
    setUpdateChatEvent(value?: UpdateChatEvent): Event;

    getEventCase(): Event.EventCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        newMessageEvent?: NewMessageEvent.AsObject,
        newChatEvent?: NewChatEvent.AsObject,
        deleteChatEvent?: DeleteChatEvent.AsObject,
        updateChatEvent?: UpdateChatEvent.AsObject,
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        NEW_MESSAGE_EVENT = 1,
        NEW_CHAT_EVENT = 2,
        DELETE_CHAT_EVENT = 3,
        UPDATE_CHAT_EVENT = 4,
    }

}

export class NewMessageEvent extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): chat_chat_pb.Message | undefined;
    setMessage(value?: chat_chat_pb.Message): NewMessageEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewMessageEvent.AsObject;
    static toObject(includeInstance: boolean, msg: NewMessageEvent): NewMessageEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewMessageEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewMessageEvent;
    static deserializeBinaryFromReader(message: NewMessageEvent, reader: jspb.BinaryReader): NewMessageEvent;
}

export namespace NewMessageEvent {
    export type AsObject = {
        message?: chat_chat_pb.Message.AsObject,
    }
}

export class NewChatEvent extends jspb.Message { 

    hasChat(): boolean;
    clearChat(): void;
    getChat(): chat_chat_pb.Chat | undefined;
    setChat(value?: chat_chat_pb.Chat): NewChatEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewChatEvent.AsObject;
    static toObject(includeInstance: boolean, msg: NewChatEvent): NewChatEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewChatEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewChatEvent;
    static deserializeBinaryFromReader(message: NewChatEvent, reader: jspb.BinaryReader): NewChatEvent;
}

export namespace NewChatEvent {
    export type AsObject = {
        chat?: chat_chat_pb.Chat.AsObject,
    }
}

export class DeleteChatEvent extends jspb.Message { 
    getChatId(): string;
    setChatId(value: string): DeleteChatEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteChatEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteChatEvent): DeleteChatEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteChatEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteChatEvent;
    static deserializeBinaryFromReader(message: DeleteChatEvent, reader: jspb.BinaryReader): DeleteChatEvent;
}

export namespace DeleteChatEvent {
    export type AsObject = {
        chatId: string,
    }
}

export class UpdateChatEvent extends jspb.Message { 

    hasChat(): boolean;
    clearChat(): void;
    getChat(): chat_chat_pb.Chat | undefined;
    setChat(value?: chat_chat_pb.Chat): UpdateChatEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateChatEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateChatEvent): UpdateChatEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateChatEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateChatEvent;
    static deserializeBinaryFromReader(message: UpdateChatEvent, reader: jspb.BinaryReader): UpdateChatEvent;
}

export namespace UpdateChatEvent {
    export type AsObject = {
        chat?: chat_chat_pb.Chat.AsObject,
    }
}

export class UnsubscribeFromEventsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UnsubscribeFromEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsubscribeFromEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnsubscribeFromEventsRequest): UnsubscribeFromEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsubscribeFromEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsubscribeFromEventsRequest;
    static deserializeBinaryFromReader(message: UnsubscribeFromEventsRequest, reader: jspb.BinaryReader): UnsubscribeFromEventsRequest;
}

export namespace UnsubscribeFromEventsRequest {
    export type AsObject = {
        userId: string,
    }
}
