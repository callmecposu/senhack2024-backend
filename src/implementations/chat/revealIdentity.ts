import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as ch_pb from "../../protos/out/chat/chat_pb";
import * as ev_pb from "../../protos/out/events/events_pb";
import ChatModel from "../../models/chat";
import UserModel from "../../models/user";
import { getEventStreams } from "../events/eventStreams";

const revealIdentity = async (
    call: ServerUnaryCall<ch_pb.RevealIdentityRequest, ch_pb.Empty>,
    callback: sendUnaryData<ch_pb.Empty>
) => {
    const req = call.request;
    try {
        // update the given chat wit user's consent to reveal their indentity
        await ChatModel.updateOne(
            { _id: req.getChatId() },
            {
                $push: { revealIdentity: req.getUserId() },
            }
        );
        const updChat = await ChatModel.findOne({_id: req.getChatId()})
        console.log('updated the chat: ', updChat)
        // create an update chat event
        const ev = new ev_pb.Event();
        const updChatEv = new ev_pb.UpdateChatEvent();
        const chat = new ch_pb.Chat();
        chat.setId(updChat?._id.toString());
        updChat?.revealIdentity.forEach((ri) => {
            chat.addRevealIdentity(ri);
        });
        chat.setDateCreated(updChat?.dateCreated.toString() as string);
        updChat?.users.forEach((user) => {
            const shUserInfo = new ch_pb.ShortUserInfo();
            shUserInfo.setUserId(user.userID);
            shUserInfo.setDisplayName(user.displayName);
            chat.addUsers(shUserInfo)
        });
        // if both users consented to revealing their identity, replace their display names with real names
        if (updChat?.revealIdentity.length == 2) {
            chat.clearUsersList();
            for (let i = 0; i < 2; i++) {
                // fetch the user
                const user = await UserModel.findOne({
                    _id: updChat.users[i].userID,
                });
                const shUserInfo = new ch_pb.ShortUserInfo();
                shUserInfo.setUserId(user?._id.toString());
                shUserInfo.setDisplayName(`${user?.fName} ${user?.lName}`);
                chat.addUsers(shUserInfo);
            }
            // update the display names in the database
            await ChatModel.updateOne(
                { _id: req.getChatId() },
                {
                    users: chat.getUsersList().map((u) => {
                        return {
                            userID: u.getUserId(),
                            displayName: u.getDisplayName(),
                        };
                    }),
                }
            );
        }
        // send a chat update event to both users
        updChatEv.setChat(chat)
        ev.setUpdateChatEvent(updChatEv)
        chat.getUsersList().forEach(u => {
            const userEventStream = getEventStreams().filter(es => es.userID == u.getUserId())
            if (userEventStream.length != 0){
                userEventStream[0].stream.write(ev)
            }
        })
        // send the response
        callback(null, new ch_pb.Empty())
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

export default revealIdentity;