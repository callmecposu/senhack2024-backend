import mongoose, { Schema, Document } from 'mongoose';

interface Message extends Document {
    dateTime: Date;
    userSent: mongoose.Types.ObjectId;
    content: string;
    chat: mongoose.Types.ObjectId;
}

const messageSchema: Schema = new Schema({
    dateTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    userSent: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    chat: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
});

export default mongoose.model<Message>('Message', messageSchema);
