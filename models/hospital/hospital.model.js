import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    specialities: {
        type: String,
        required: true,
    }
}, {timestamps: true})