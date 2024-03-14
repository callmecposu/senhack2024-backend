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
    getEducation(): string;
    setEducation(value: string): User;
    clearSocialMediaList(): void;
    getSocialMediaList(): Array<string>;
    setSocialMediaList(value: Array<string>): User;
    addSocialMedia(value: string, index?: number): string;
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
        education: string,
        socialMediaList: Array<string>,
        blockListList: Array<string>,
        notInterestedList: Array<string>,
    }
}

export class UserInfo extends jspb.Message { 
    clearInterestsList(): void;
    getInterestsList(): Array<Interest>;
    setInterestsList(value: Array<Interest>): UserInfo;
    addInterests(value: Interest, index?: number): Interest;
    clearNativeLangsList(): void;
    getNativeLangsList(): Array<Language>;
    setNativeLangsList(value: Array<Language>): UserInfo;
    addNativeLangs(value: Language, index?: number): Language;
    clearOtherLangsList(): void;
    getOtherLangsList(): Array<Language>;
    setOtherLangsList(value: Array<Language>): UserInfo;
    addOtherLangs(value: Language, index?: number): Language;
    getPersonalityType(): MbtiType;
    setPersonalityType(value: MbtiType): UserInfo;
    getPetInfo(): Pet;
    setPetInfo(value: Pet): UserInfo;
    getDrinkingInfo(): Frequency;
    setDrinkingInfo(value: Frequency): UserInfo;
    getSmokingInfo(): Frequency;
    setSmokingInfo(value: Frequency): UserInfo;

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
        nativeLangsList: Array<Language>,
        otherLangsList: Array<Language>,
        personalityType: MbtiType,
        petInfo: Pet,
        drinkingInfo: Frequency,
        smokingInfo: Frequency,
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
    HIKING = 0,
    TRAVELING = 1,
    COOKING = 2,
    PHOTOGRAPHY = 3,
    READING = 4,
    YOGA = 5,
    RUNNING = 6,
    PAINTING = 7,
    GAMING = 8,
    WATCHING_MOVIES = 9,
    PLAYING_MUSICAL_INSTRUMENTS = 10,
    WRITING = 11,
    VOLUNTEERING = 12,
    SURFING = 13,
    SKIING_SNOWBOARDING = 14,
    DANCING = 15,
    WINE_TASTING = 16,
    CRAFTING = 17,
    BIRD_WATCHING = 18,
    SCUBA_DIVING = 19,
    ROCK_CLIMBING = 20,
    MEDITATION = 21,
    FOOD_TASTING = 22,
    BIKING = 23,
    FASHION = 24,
    GARDENING = 25,
    CAMPING = 26,
    PLAYING_SPORTS = 27,
    LEARNING_NEW_LANGUAGES = 28,
    DIY_PROJECTS = 29,
    ASTRONOMY = 30,
    BOARD_GAMES = 31,
    KARAOKE = 32,
    HORSEBACK_RIDING = 33,
    FASHION_DESIGN = 34,
    MOTORSPORTS = 35,
    COLLECTING = 36,
    STAND_UP_COMEDY = 37,
    ANIME_MANGA = 38,
    POTTERY = 39,
    ACTING = 40,
    FISHING = 41,
    SUSTAINABLE_LIVING = 42,
    GEOCACHING = 43,
    MUSIC_FESTIVALS = 44,
    HISTORY = 45,
    BEER_BREWING = 46,
    SALSA_DANCING = 47,
    DIGITAL_ART_CREATION = 48,
    UNKNOWN = 49,
}

export enum Language {
    MANDARIN_CHINESE = 0,
    SPANISH = 1,
    ENGLISH = 2,
    HINDI = 3,
    BENGALI = 4,
    PORTUGUESE = 5,
    RUSSIAN = 6,
    JAPANESE = 7,
    LAHNDA = 8,
    MARATHI = 9,
    TELUGU = 10,
    WU_CHINESE = 11,
    TURKISH = 12,
    KOREAN = 13,
    FRENCH = 14,
    GERMAN = 15,
    VIETNAMESE = 16,
    TAMIL = 17,
    URDU = 18,
    YUE_CHINESE = 19,
    JAVANESE = 20,
    ITALIAN = 21,
    EGYPTIAN_ARABIC = 22,
    GUJARATI = 23,
    JIN_CHINESE = 24,
    POLISH = 25,
    UKRAINIAN = 26,
    MALAYALAM = 27,
    KANNADA = 28,
    XIANG_CHINESE = 29,
    ORIYA = 30,
    BURMESE = 31,
    HAKKA_CHINESE = 32,
    THAI = 33,
    SUNDANESE = 34,
    HAUSA = 35,
    FARSI = 36,
    DUTCH = 37,
    YORUBA = 38,
    SWAHILI = 39,
    SERBO_CROATIAN = 40,
    AMHARIC = 41,
    NEPALI = 42,
    HUNGARIAN = 43,
    SIMPLIFIED_CHINESE = 44,
    SOMALI = 45,
    ASSAMESE = 46,
    SINHALA = 47,
    UZBEK = 48,
}

export enum MbtiType {
    ISTJ = 0,
    ISFJ = 1,
    INFJ = 2,
    INTJ = 3,
    ISTP = 4,
    ISFP = 5,
    INFP = 6,
    INTP = 7,
    ESTP = 8,
    ESFP = 9,
    ENFP = 10,
    ENTP = 11,
    ESTJ = 12,
    ESFJ = 13,
    ENFJ = 14,
    ENTJ = 15,
}

export enum Pet {
    DOG = 0,
    CAT = 1,
    REPTILE = 2,
    AMPHIBIAN = 3,
    BIRD = 4,
    HAMSTER = 5,
    MULTIPLE_PETS = 6,
    ALLERGIC = 7,
    PET_FREE = 8,
}

export enum Frequency {
    NEVER = 0,
    RARELY = 1,
    OCCASIONALLY = 2,
    OFTEN = 3,
    REGULARLY = 4,
}
