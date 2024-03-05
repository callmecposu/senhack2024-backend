import { Schema, Document, model } from 'mongoose';

// Define the schema for the condoCode model
const condoAccessCodeSchema = new Schema({
    condo_id: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
});

// Define the interface for the condoCode document
interface ICondoAccessCode extends Document {
    _id: string;
    condo_id: string;
    code: string;
}

// Create and export the condoCode model
const CondoCode =  model<ICondoAccessCode>('CondoAccessCode', condoAccessCodeSchema);

export default CondoCode;
