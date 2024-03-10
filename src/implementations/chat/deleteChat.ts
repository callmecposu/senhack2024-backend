import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import { DeleteChatRequest, Empty } from "../../protos/out/chat/chat_pb";
import { getEventStreams } from "../events/eventStreams";
import ChatModel from "../../models/chat";
import { DeleteChatEvent, Event } from "../../protos/out/events/events_pb";
import MessageModel from "../../models/message";

const deleteChat = async (
    call: ServerUnaryCall<DeleteChatRequest, Empty>,
    callback: sendUnaryData<Empty>
) => {
    const request = call.request;
    try {
        // Find the chat in the database by id
        const chat = await ChatModel.findById(request.getChatId().toString());
        if(!chat){
            callback({code: status.NOT_FOUND, message: "Chat not found"});
            return;
        }
        else {
            let userIds = chat.users.map(user => user.userID);
            const userEventStreams = getEventStreams().filter(
                (es) => userIds.includes(es.userID)
            );
            if (userEventStreams.length != 0) {
                const ev = new Event(); 
                const deleteChatEvent = new DeleteChatEvent();
                deleteChatEvent.setChatId(chat._id.toString());
                ev.setDeleteChatEvent(deleteChatEvent);

                userEventStreams.forEach((es) => {
                    es.stream.write(ev);
                });
            }

            await MessageModel.deleteMany({chat: chat._id.toString()});
            await chat.deleteOne();
        }

        // Return the response
        callback(null, new Empty());
    }
    catch(err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
}

export default deleteChat;