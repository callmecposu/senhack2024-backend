import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as ev_pb from "../../protos/out/events/events_pb";
import * as ch_pb from "../../protos/out/chat/chat_pb";
import { removeEventStream } from "./eventStreams";

const unsubscribeFromEvents = (call: ServerUnaryCall<ev_pb.UnsubscribeFromEventsRequest, ch_pb.Empty>, callback: sendUnaryData<ch_pb.Empty>) => {
    const req = call.request
    try {
        // remove the event stream from the storage
        removeEventStream(req.getUserId())
    } catch (err: any){
        console.log(err)
        callback({code: status.INTERNAL, message: err.message})
    }
}

export default unsubscribeFromEvents