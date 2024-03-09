// package: 
// file: user/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getFirstName(): string;
    setFirstName(value: string): User;
    getLastName(): string;
    setLastName(value: string): User;
    getAnonName(): string;
    setAnonName(value: string): User;
    getBio(): string;
    setBio(value: string): User;

    hasAboutUser(): boolean;
    clearAboutUser(): void;
    getAboutUser(): UserInfo | undefined;
    setAboutUser(value?: UserInfo): User;

    hasPreferences(): boolean;
    clearPreferences(): void;
    getPreferences(): UserInfo | undefined;
    setPreferences(value?: UserInfo): User;
    clearBlockListList(): void;
    getBlockListList(): Array<string>;
    setBlockListList(value: Array<string>): User;
    addBlockList(value: string, index?: number): string;
    clearNotInterestedList(): void;
    getNotInterestedList(): Array<string>;
    setNotInterestedList(value: Array<string>): User;
    addNotInterested(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        email: string,
        firstName: string,
        lastName: string,
        anonName: string,
        bio: string,
        aboutUser?: UserInfo.AsObject,
        preferences?: UserInfo.AsObject,
        blockListList: Array<string>,
        notInterestedList: Array<string>,
    }
}

export class UserInfo extends jspb.Message { 
    clearInterestsList(): void;
    getInterestsList(): Array<Interest>;
    setInterestsList(value: Array<Interest>): UserInfo;
    addInterests(value: Interest, index?: number): Interest;
    getNativeLang(): Language;
    setNativeLang(value: Language): UserInfo;
    clearOtherLangsList(): void;
    getOtherLangsList(): Array<Language>;
    setOtherLangsList(value: Array<Language>): UserInfo;
    addOtherLangs(value: Language, index?: number): Language;
    getPersonalityType(): PersonalityType;
    setPersonalityType(value: PersonalityType): UserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfo;
    static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
    export type AsObject = {
        interestsList: Array<Interest>,
        nativeLang: Language,
        otherLangsList: Array<Language>,
        personalityType: PersonalityType,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): CreateUserRequest;
    getFirstName(): string;
    setFirstName(value: string): CreateUserRequest;
    getLastName(): string;
    setLastName(value: string): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        email: string,
        firstName: string,
        lastName: string,
        password: string,
    }
}

export class LoginUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginUserRequest;
    getPassword(): string;
    setPassword(value: string): LoginUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
    static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateUserRequest;

    hasBio(): boolean;
    clearBio(): void;
    getBio(): string | undefined;
    setBio(value: string): UpdateUserRequest;

    hasAboutUser(): boolean;
    clearAboutUser(): void;
    getAboutUser(): UserInfo | undefined;
    setAboutUser(value?: UserInfo): UpdateUserRequest;

    hasPreferences(): boolean;
    clearPreferences(): void;
    getPreferences(): UserInfo | undefined;
    setPreferences(value?: UserInfo): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        id: string,
        bio?: string,
        aboutUser?: UserInfo.AsObject,
        preferences?: UserInfo.AsObject,
    }
}

export class GetUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class FindChatMateRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): FindChatMateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindChatMateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindChatMateRequest): FindChatMateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindChatMateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindChatMateRequest;
    static deserializeBinaryFromReader(message: FindChatMateRequest, reader: jspb.BinaryReader): FindChatMateRequest;
}

export namespace FindChatMateRequest {
    export type AsObject = {
        userId: string,
    }
}

export enum Interest {
    MUSIC = 0,
    MOVIES = 1,
    TV_SHOWS = 2,
    BOOKS = 3,
    HOBBIES = 4,
    SPORTS = 5,
    TRAVEL = 6,
    FOOD_AND_DINING = 7,
    FITNESS_AND_WELLNESS = 8,
    GAMING = 9,
    TECHNOLOGY = 10,
    FASHION_AND_STYLE = 11,
    ARTS_AND_CULTURE = 12,
    PHOTOGRAPHY = 13,
    NATURE_AND_OUTDOORS = 14,
    POLITICS_AND_CURRENT_EVENTS = 15,
    SCIENCE_AND_SPACE = 16,
    PETS = 17,
    VOLUNTEER_WORK = 18,
    CREATIVE_WRITING = 19,
}

export enum Language {
    ENGLISH = 0,
    CHINESE = 1,
    SPANISH = 2,
    HINDI = 3,
    ARABIC = 4,
    FRENCH = 5,
    BENGALI = 6,
    RUSSIAN = 7,
    PORTUGUESE = 8,
    URDU = 9,
    GERMAN = 10,
    JAPANESE = 11,
    SWAHILI = 12,
    PUNJABI = 13,
    KOREAN = 14,
    TELUGU = 15,
    MARATHI = 16,
    TAMIL = 17,
    ITALIAN = 18,
    TURKISH = 19,
}

export enum PersonalityType {
    INTROVERT = 0,
    EXTRAVERT = 1,
}
