// package: auth
// file: auth/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getCondoId(): string;
    setCondoId(value: string): User;
    getFirstName(): string;
    setFirstName(value: string): User;
    getLastName(): string;
    setLastName(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): User;
    getUnit(): number;
    setUnit(value: number): User;
    getEmail(): string;
    setEmail(value: string): User;

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
        condoId: string,
        firstName: string,
        lastName: string,
        password: string,
        phoneNumber: string,
        unit: number,
        email: string,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): CreateUserRequest;
    getLastName(): string;
    setLastName(value: string): CreateUserRequest;
    getEmail(): string;
    setEmail(value: string): CreateUserRequest;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;
    getCondoAccessCode(): string;
    setCondoAccessCode(value: string): CreateUserRequest;

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
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        password: string,
        condoAccessCode: string,
    }
}

export class CreateUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): CreateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        user?: User.AsObject,
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

export class LoginUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): LoginUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
    static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}
