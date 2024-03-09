import mongoose, { Schema, Document } from 'mongoose';

interface Chat extends Document {
    dateCreated: Date;
    users: string[];
    revealIdentity: string[];
}

const chatSchema: Schema = new Schema({
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    users: {
        type: [String],
        required: true,
        validate: {
            validator: function (users: string[]) {
                return users.length <= 2;
            },
            message: 'The maximum length of the users array is 2.'
        }
    },
    revealIdentity: {
        type: [String],
        default: [],
        validate: {
            validator: function (revealIdentity: string[]) {
                return revealIdentity.length <= 2;
            },
            message: 'The maximum length of the revealIdentity array is 2.'
        }
    }
});

const ChatModel = mongoose.model<Chat>('Chat', chatSchema);

export default ChatModel;
