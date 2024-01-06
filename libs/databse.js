import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
}, {timestamps: true})

const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema)

export default Review