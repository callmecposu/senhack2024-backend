import { Schema, Document, model } from 'mongoose';

// Define the schema for the condo model
const condoSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    office_hours: [{
        day: {
            type: String,
            required: true,
        },
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    }],
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
});

// Define the interface for the condo document
interface ICondo extends Document {
    _id: string;
    address: string;
    name: string;
    office_hours: [{
        day: string;
        from: string;
        to: string;
    }];
    phone_number: string;
    email: string;
    owner: string;
}

// Create and export the condo model
const Condo = model<ICondo>('Condo', condoSchema);

export default Condo;
