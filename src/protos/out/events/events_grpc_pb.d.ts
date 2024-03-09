// package: 
// file: events/events.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as events_events_pb from "../events/events_pb";
import * as chat_chat_pb from "../chat/chat_pb";

interface IEventsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribeToEvents: IEventsServiceService_ISubscribeToEvents;
    unsubscribeFromEvents: IEventsServiceService_IUnsubscribeFromEvents;
}

interface IEventsServiceService_ISubscribeToEvents extends grpc.MethodDefinition<events_events_pb.SubscribeToEventsRequest, events_events_pb.Event> {
    path: "/EventsService/SubscribeToEvents";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<events_events_pb.SubscribeToEventsRequest>;
    requestDeserialize: grpc.deserialize<events_events_pb.SubscribeToEventsRequest>;
    responseSerialize: grpc.serialize<events_events_pb.Event>;
    responseDeserialize: grpc.deserialize<events_events_pb.Event>;
}
interface IEventsServiceService_IUnsubscribeFromEvents extends grpc.MethodDefinition<events_events_pb.UnsubscribeFromEventsRequest, chat_chat_pb.Empty> {
    path: "/EventsService/UnsubscribeFromEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<events_events_pb.UnsubscribeFromEventsRequest>;
    requestDeserialize: grpc.deserialize<events_events_pb.UnsubscribeFromEventsRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.Empty>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.Empty>;
}

export const EventsServiceService: IEventsServiceService;

export interface IEventsServiceServer {
    subscribeToEvents: grpc.handleServerStreamingCall<events_events_pb.SubscribeToEventsRequest, events_events_pb.Event>;
    unsubscribeFromEvents: grpc.handleUnaryCall<events_events_pb.UnsubscribeFromEventsRequest, chat_chat_pb.Empty>;
}

export interface IEventsServiceClient {
    subscribeToEvents(request: events_events_pb.SubscribeToEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_events_pb.Event>;
    subscribeToEvents(request: events_events_pb.SubscribeToEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_events_pb.Event>;
    unsubscribeFromEvents(request: events_events_pb.UnsubscribeFromEventsRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    unsubscribeFromEvents(request: events_events_pb.UnsubscribeFromEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    unsubscribeFromEvents(request: events_events_pb.UnsubscribeFromEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class EventsServiceClient extends grpc.Client implements IEventsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public subscribeToEvents(request: events_events_pb.SubscribeToEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_events_pb.Event>;
    public subscribeToEvents(request: events_events_pb.SubscribeToEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_events_pb.Event>;
    public unsubscribeFromEvents(request: events_events_pb.UnsubscribeFromEventsRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    public unsubscribeFromEvents(request: events_events_pb.UnsubscribeFromEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
    public unsubscribeFromEvents(request: events_events_pb.UnsubscribeFromEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.Empty) => void): grpc.ClientUnaryCall;
}
