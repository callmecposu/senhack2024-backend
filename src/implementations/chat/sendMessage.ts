import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/chat/chat_pb";
import Message from "../../models/message";
import { getMessageStreams } from "./messageStreams";

const sendMessage = async (
    call: ServerUnaryCall<pb.Message, pb.SendMessageResponse>,
    callback: sendUnaryData<pb.SendMessageResponse>
) => {
    const req = call.request;
    try {
        // save the message in the database
        const message = new Message({
            condo_id: req.getCondoId(),
            user_id: req.getUserId(),
            user_first_name: req.getUserFirstName(),
            user_last_name: req.getUserLastName(),
            content: req.getContent(),
        });
        const savedMessage = await message.save();
        req.setDate(savedMessage.date.toString());
        // send the message to all active streams
        getMessageStreams().forEach((msgStream) => {
            if (msgStream.condo_id == req.getCondoId()) {
                msgStream.stream.write(req);
            }
        });
        const response = new pb.SendMessageResponse();
        callback(null, response);
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default sendMessage;
