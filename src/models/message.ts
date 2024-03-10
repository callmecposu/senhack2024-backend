import mongoose, { Schema, Document } from "mongoose";

interface Message extends Document {
    dateTime: Date;
    sender: string;
    receiver: string;
    content: string;
    chat: string;
}

const messageSchema: Schema = new Schema({
    dateTime: {
        type: Date,
        required: true,
        default: Date.now,
    },
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    chat: {
        type: String,
        required: true,
    },
});

const MessageModel = mongoose.model<Message>("Message", messageSchema);

export default MessageModel;
