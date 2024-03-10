import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as ch_pb from "../../protos/out/chat/chat_pb";
import * as ev_pb from "../../protos/out/events/events_pb";
import ChatModel from "../../models/chat";
import { getEventStreams } from "../events/eventStreams";
import UserModel from "../../models/user";

const createChat = async (
    call: ServerUnaryCall<ch_pb.CreateChatRequest, ch_pb.Chat>,
    callback: sendUnaryData<ch_pb.Chat>
) => {
    const req = call.request;
    try {
        // check if the chat between the users already exists
        const chatWithGivenUsers = await ChatModel.findOne({
            "users.0.userID": {
                $in: req.getUsersList(),
            },
            "users.1.userID": {
                $in: req.getUsersList(),
            },
        });
        if (chatWithGivenUsers) {
            callback({
                code: status.ALREADY_EXISTS,
                message: "Chat with these users already exists!",
            });
            return;
        }
        // fetch the chat users
        const chatUsers = await UserModel.find({
            _id: { $in: req.getUsersList() },
        });
        // create a new chat
        const newChat = new ChatModel({
            users: chatUsers.map((chatUser) => {
                return {
                    userID: chatUser._id.toString(),
                    displayName: chatUser.anonName,
                };
            }),
        });
        const savedChat = await newChat.save();
        // create the response chat
        const respChat = new ch_pb.Chat();
        respChat.setId(savedChat._id.toString());
        savedChat.users.forEach((user) => {
            const shUserInfo = new ch_pb.ShortUserInfo()
            shUserInfo.setUserId(user.userID)
            shUserInfo.setDisplayName(user.displayName)
            respChat.addUsers(shUserInfo)
        });
        respChat.setDateCreated(savedChat.dateCreated.toString());
        respChat.setRevealIdentityList([]);
        // create the new chat event
        const ev = new ev_pb.Event();
        const newChatEv = new ev_pb.NewChatEvent();
        newChatEv.setChat(respChat);
        ev.setNewChatEvent(newChatEv);
        // send the new chat event to the users
        req.getUsersList().forEach((userID) => {
            const userEventStream = getEventStreams().filter(
                (es) => es.userID == userID
            );
            if (userEventStream.length != 0) {
                userEventStream[0].stream.write(ev);
            }
        });
        // send the response
        callback(null, respChat);
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default createChat;
