import { ServerWritableStream, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/chat/chat_pb";
import { addMessageStream } from "./messageStreams";
import Message from "../../models/message";

const subscribeToChat = async (
    call: ServerWritableStream<pb.SubscribeToChatRequest, pb.Message>
) => {
    const req = call.request;
    try {
        // add the stream to the shared state
        addMessageStream({
            user_id: req.getUserId(),
            condo_id: req.getCondoId(),
            stream: call,
        });
        // write all the existing messages to the stream
        const messages = await Message.find({condo_id: req.getCondoId()})
        messages.forEach(msg => {
            const bsonMsg = new pb.Message()
            bsonMsg.setCondoId(msg.condo_id)
            bsonMsg.setUserId(msg.user_id)
            bsonMsg.setUserFirstName(msg.user_first_name)
            bsonMsg.setUserLastName(msg.user_first_name)
            bsonMsg.setContent(msg.content)
            bsonMsg.setDate(msg.date.toString())
            call.write(bsonMsg)
        })
    } catch (err: any) {
        console.log(err)
        call.emit("error", {
            code: status.INTERNAL,
            message: err.message,
        });
    }
};

export default subscribeToChat