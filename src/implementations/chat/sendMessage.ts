import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as ch_pb from "../../protos/out/chat/chat_pb";
import * as ev_pb from "../../protos/out/events/events_pb";
import MessageModel from "../../models/message";
import { getEventStreams } from "../events/eventStreams";

const sendMessage = async (
    call: ServerUnaryCall<ch_pb.SendMessageRequest, ch_pb.Message>,
    callback: sendUnaryData<ch_pb.Message>
) => {
    const req = call.request;
    try {
        // create the new message in the database
        const newMessage = new MessageModel({
            sender: req.getSenderId(),
            receiver: req.getReceiverId(),
            chat: req.getChatId(),
            content: req.getContent(),
        });
        const savedMessage = await newMessage.save();
        // crate the response message
        const msg = new ch_pb.Message();
        msg.setId(savedMessage._id.toString());
        msg.setSenderId(savedMessage.sender);
        msg.setReceiverId(savedMessage.receiver);
        msg.setChatId(savedMessage.chat);
        msg.setContent(savedMessage.content);
        msg.setDate(savedMessage.dateTime.toString());
        // create a new message event
        const ev = new ev_pb.Event();
        const newMsgEv = new ev_pb.NewMessageEvent();
        newMsgEv.setMessage(msg);
        ev.setNewMessageEvent(newMsgEv);
        // send a new message event to the sender
        const senderStream = getEventStreams().filter(
            (es) => es.userID == req.getSenderId()
        );
        if (senderStream.length != 0){
            senderStream[0].stream.write(ev)
        }
        // if the receiver is subscribed to the events, send a new message event to them
        const receiverStream = getEventStreams().filter(
            (es) => es.userID == req.getReceiverId()
        );
        if (receiverStream.length != 0) {
            receiverStream[0].stream.write(ev);
        }
        // send the response
        callback(null, msg);
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default sendMessage;
