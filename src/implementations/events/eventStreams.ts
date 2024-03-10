import { ServerWritableStream } from "@grpc/grpc-js";
import * as ev_pb from "../../protos/out/events/events_pb";

type EventStream = {
    userID: string;
    stream: ServerWritableStream<ev_pb.SubscribeToEventsRequest, ev_pb.Event>;
};

let eventStreams: EventStream[] = [];

export const getEventStreams = () => eventStreams;

export const addEventStream = (es: EventStream) => {
    eventStreams.push(es);
};

export const removeEventStream = (userID: string) => {
    eventStreams = eventStreams.filter((es) => es.userID != userID);
};
