import mongoose, { Schema, Document } from 'mongoose';

interface UserInfo {
    interests: string[];
    nativeLanguages: string[];
    otherLanguages: string[];
    personalityType: string;
    petInfo: string;
    drinkingInfo: string;
    smokingInfo: string;
}

interface User extends Document {
    fName: string;
    lName: string;
    anonName: string;
    email: string;
    password: string;
    bio: string;
    aboutUser: UserInfo;
    roomatePreferences: UserInfo;
    blockList: string[];
    notInterested: string[];
    education: string;
    socialMedia: string[];
    embeddings: number[];
}

const userSchema: Schema = new Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    anonName: { type: String, default: '' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' },
    aboutUser: {
        interests: { type: [String], default: [] },
        nativeLanguages: { type: [String], default: [] },
        otherLanguages: { type: [String], default: [] },
        personalityType: { type: String, default: '0' },
        petInfo: {type: String, default: '0'},
        drinkingInfo: {type: String, default: '0'},
        smokingInfo: {type: String, default: '0'}
    },
    roomatePreferences: {
        interests: { type: [String], default: [] },
        nativeLanguages: { type: [String], default: [] },
        otherLanguages: { type: [String], default: [] },
        personalityType: { type: String, default: '0' },
        petInfo: {type: String, default: '0'},
        drinkingInfo: {type: String, default: '0'},
        smokingInfo: {type: String, default: '0'}
    },
    socialMedia: {type: [String], default: []},
    education: {type: String, default: ''},
    blockList: { type: [String], default: [] },
    notInterested: { type: [String], default: [] },
    embeddings: { type: [Number], default: [] },
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
