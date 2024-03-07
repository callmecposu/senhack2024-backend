import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    condo_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    user_first_name: {
        type: String,
        required: true
    },
    user_last_name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

interface IMessage extends Document {
    _id: string,
    condo_id: string,
    user_id: string,
    user_first_name: string,
    user_last_name: string,
    content: string,
    date: Date
}

const Message = model<IMessage>('Message', messageSchema)

export default Message