import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/chat/chat_pb";
import { removeMessageStream } from "./messageStreams";

const unsubscribeFromChat = async (
    call: ServerUnaryCall<
        pb.UnsubscribeFromChatRequest,
        pb.UnsubscribeFromChatResponse
    >,
    callback: sendUnaryData<pb.UnsubscribeFromChatResponse>
) => {
    const req = call.request;
    try {
        // remove the stream from the shared state
        removeMessageStream(req.getUserId(), req.getCondoId())
        const response = new pb.UnsubscribeFromChatResponse()
        callback(null, response)
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default unsubscribeFromChat