import mongoose, { Schema, Document } from 'mongoose';

interface ShortUserInfo {
    userID: string,
    displayName : string
}

interface Chat extends Document {
    dateCreated: Date;
    users: ShortUserInfo[]
    revealIdentity: string[];
}

const shortUserInfoSchema: Schema = new Schema({
    userID: {
        type: String
    },
    displayName: {
        type: String
    }
}, {_id: false})

const chatSchema: Schema = new Schema({
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    users: {
        type: [shortUserInfoSchema],
        required: true,
        validate: {
            validator: function (users: ShortUserInfo[]) {
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
