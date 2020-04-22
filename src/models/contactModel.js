import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema  = new Schema({
    firstname: {
        type: String,
        required: 'Enter your first name'
    },
    lastname: {
        type: String,
        required: 'Enter your first name'
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    bio: { 
        type: String, 
        match: /[a-z]/ 
    },
    phone: {
        type: Number,
        required: true
    },
    company: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})