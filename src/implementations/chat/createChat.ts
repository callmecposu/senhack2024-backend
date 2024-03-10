import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as ch_pb from "../../protos/out/chat/chat_pb";
import * as ev_pb from "../../protos/out/events/events_pb";
import ChatModel from "../../models/chat";

const createChat = async (
    call: ServerUnaryCall<ch_pb.CreateChatRequest, ch_pb.Chat>,
    callback: sendUnaryData<ch_pb.Chat>
) => {
    const req = call.request;
    try {
        // check if the chat between the users already exists
        const chatWithGivenUsers = await ChatModel.findOne({
            users: req.getUsersList(),
        });
        if (chatWithGivenUsers) {
            callback({
                code: status.ALREADY_EXISTS,
                message: "Chat with these users already exists!",
            });
            return;
        }
        // create a new chat
        const newChat = new ChatModel({ users: req.getUsersList() });
        const savedChat = await newChat.save();
        // create the response
        const respChat = new ch_pb.Chat();
        respChat.setId(savedChat._id.toString());
        savedChat.users.forEach((user) => {
            respChat.addUsers(user);
        });
        respChat.setDateCreated(savedChat.dateCreated.toString());
        respChat.setRevealIdentityList([]);
        // send the response
        callback(null, respChat);
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default createChat