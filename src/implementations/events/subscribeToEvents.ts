import { ServerWritableStream, status } from "@grpc/grpc-js";
import * as ev_pb from "../../protos/out/events/events_pb";
import * as ch_pb from "../../protos/out/chat/chat_pb";
import { addEventStream } from "./eventStreams";

const subscribeToEvents = (
    call: ServerWritableStream<ev_pb.SubscribeToEventsRequest, ev_pb.Event>
) => {
    const req = call.request
    try {
        // store the stream
        addEventStream({userID: req.getUserId(), stream: call})
    } catch (err: any){
        console.log(err)
        call.emit('error', {code: status.INTERNAL, message: err.message})
    }
};

export default subscribeToEvents;
