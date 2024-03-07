import { ServerWritableStream } from "@grpc/grpc-js";
import { Message, SubscribeToChatRequest } from "../../protos/out/chat/chat_pb";

type MessageStream = {
    user_id: string;
    condo_id: string;
    stream: ServerWritableStream<SubscribeToChatRequest, Message>;
};

let messageStreams: MessageStream[] = [];

export const getMessageStreams = () => messageStreams;

export const addMessageStream = (msgStream: MessageStream) => {
    messageStreams.push(msgStream);
};

export const removeMessageStream = (user_id: string, condo_id: string) => {
    messageStreams = messageStreams.filter(
        (msgStream) => {
            return !(msgStream.condo_id == condo_id && msgStream.user_id == user_id)
        }
    );
};
