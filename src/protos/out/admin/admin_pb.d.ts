// package: admin
// file: admin/admin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OfficeHour extends jspb.Message { 
    getDay(): string;
    setDay(value: string): OfficeHour;
    getFrom(): string;
    setFrom(value: string): OfficeHour;
    getTo(): string;
    setTo(value: string): OfficeHour;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OfficeHour.AsObject;
    static toObject(includeInstance: boolean, msg: OfficeHour): OfficeHour.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OfficeHour, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OfficeHour;
    static deserializeBinaryFromReader(message: OfficeHour, reader: jspb.BinaryReader): OfficeHour;
}

export namespace OfficeHour {
    export type AsObject = {
        day: string,
        from: string,
        to: string,
    }
}

export class Condo extends jspb.Message { 
    getId(): string;
    setId(value: string): Condo;
    getAddress(): string;
    setAddress(value: string): Condo;
    getName(): string;
    setName(value: string): Condo;
    clearOfficeHoursList(): void;
    getOfficeHoursList(): Array<OfficeHour>;
    setOfficeHoursList(value: Array<OfficeHour>): Condo;
    addOfficeHours(value?: OfficeHour, index?: number): OfficeHour;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): Condo;
    getEmail(): string;
    setEmail(value: string): Condo;
    getOwner(): string;
    setOwner(value: string): Condo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condo.AsObject;
    static toObject(includeInstance: boolean, msg: Condo): Condo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condo;
    static deserializeBinaryFromReader(message: Condo, reader: jspb.BinaryReader): Condo;
}

export namespace Condo {
    export type AsObject = {
        id: string,
        address: string,
        name: string,
        officeHoursList: Array<OfficeHour.AsObject>,
        phoneNumber: string,
        email: string,
        owner: string,
    }
}

export class CreateCondoRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): CreateCondoRequest;
    getName(): string;
    setName(value: string): CreateCondoRequest;
    clearOfficeHoursList(): void;
    getOfficeHoursList(): Array<OfficeHour>;
    setOfficeHoursList(value: Array<OfficeHour>): CreateCondoRequest;
    addOfficeHours(value?: OfficeHour, index?: number): OfficeHour;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): CreateCondoRequest;
    getEmail(): string;
    setEmail(value: string): CreateCondoRequest;
    getOwner(): string;
    setOwner(value: string): CreateCondoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCondoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCondoRequest): CreateCondoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCondoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCondoRequest;
    static deserializeBinaryFromReader(message: CreateCondoRequest, reader: jspb.BinaryReader): CreateCondoRequest;
}

export namespace CreateCondoRequest {
    export type AsObject = {
        address: string,
        name: string,
        officeHoursList: Array<OfficeHour.AsObject>,
        phoneNumber: string,
        email: string,
        owner: string,
    }
}

export class CreateCondoResponse extends jspb.Message { 

    hasCondo(): boolean;
    clearCondo(): void;
    getCondo(): Condo | undefined;
    setCondo(value?: Condo): CreateCondoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCondoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCondoResponse): CreateCondoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCondoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCondoResponse;
    static deserializeBinaryFromReader(message: CreateCondoResponse, reader: jspb.BinaryReader): CreateCondoResponse;
}

export namespace CreateCondoResponse {
    export type AsObject = {
        condo?: Condo.AsObject,
    }
}

export class CreateAccessCodeRequest extends jspb.Message { 
    getCondoId(): string;
    setCondoId(value: string): CreateAccessCodeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessCodeRequest): CreateAccessCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessCodeRequest;
    static deserializeBinaryFromReader(message: CreateAccessCodeRequest, reader: jspb.BinaryReader): CreateAccessCodeRequest;
}

export namespace CreateAccessCodeRequest {
    export type AsObject = {
        condoId: string,
    }
}

export class CreateAccessCodeResponse extends jspb.Message { 
    getAccessCode(): string;
    setAccessCode(value: string): CreateAccessCodeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessCodeResponse): CreateAccessCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessCodeResponse;
    static deserializeBinaryFromReader(message: CreateAccessCodeResponse, reader: jspb.BinaryReader): CreateAccessCodeResponse;
}

export namespace CreateAccessCodeResponse {
    export type AsObject = {
        accessCode: string,
    }
}
