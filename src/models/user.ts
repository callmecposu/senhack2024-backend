import { Schema, Document, model } from 'mongoose';

// Define the user schema
const userSchema: Schema = new Schema({
    condo_id: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    unit: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define the user model
interface IUser extends Document {
    _id: string;
    condo_id: string;
    first_name: string;
    last_name: string;
    password: string;
    phone_number: string;
    unit: number;
    email: string;
    createdAt: Date;
}

// Create and export the condoCode model
const User = model<IUser>('User', userSchema);

export default User;
