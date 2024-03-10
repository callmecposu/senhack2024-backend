import { ServerWritableStream, status } from "@grpc/grpc-js";
import * as ev_pb from "../../protos/out/events/events_pb";
import * as ch_pb from "../../protos/out/chat/chat_pb";
import { addEventStream } from "./eventStreams";
import ChatModel from "../../models/chat";
import MessageModel from "../../models/message";

const subscribeToEvents = async (
    call: ServerWritableStream<ev_pb.SubscribeToEventsRequest, ev_pb.Event>
) => {
    const req = call.request;
    try {
        // store the stream
        addEventStream({ userID: req.getUserId(), stream: call });
        // fetch all the user's chats
        const userChats = await ChatModel.find({ users: req.getUserId() });
        // send new chat events to the user
        for (let i = 0; i < userChats.length; i++) {
            const chatEv = new ev_pb.Event();
            const newChatEv = new ev_pb.NewChatEvent();
            const newChat = new ch_pb.Chat();
            newChat.setId(userChats[i]._id.toString());
            userChats[i].users.forEach((userID) => {
                newChat.addUsers(userID);
            });
            userChats[i].revealIdentity.forEach((ri) => {
                newChat.addRevealIdentity(ri);
            });
            newChat.setDateCreated(userChats[i].dateCreated.toString());
            newChatEv.setChat(newChat);
            chatEv.setNewChatEvent(newChatEv);
            call.write(chatEv);
            // fetch all the chat's messages
            const chatMessages = await MessageModel.find({chat: userChats[i]._id.toString()})
            // send new message events to the user
            chatMessages.forEach(msg => {
                const msgEv = new ev_pb.Event()
                const newMsgEv = new ev_pb.NewMessageEvent()
                const newMsg = new ch_pb.Message()
                newMsg.setId(msg._id.toString())
                newMsg.setChatId(msg.chat)
                newMsg.setSenderId(msg.sender)
                newMsg.setReceiverId(msg.receiver)
                newMsg.setContent(msg.content)
                newMsg.setDate(msg.dateTime.toString())
                newMsgEv.setMessage(newMsg)
                msgEv.setNewMessageEvent(newMsgEv)
                call.write(msgEv)
            })
        }
    } catch (err: any) {
        console.log(err);
        call.emit("error", { code: status.INTERNAL, message: err.message });
    }
};

export default subscribeToEvents;
