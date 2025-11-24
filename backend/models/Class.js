import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    }, 
    instructor: {
        type: String, 
        required: true,
    },
    schedule: {
        days: [String],
        time: String,
        startDate: Date,
        endDate: Date
    },
    capacity: {
        type: Number,
        required: true,
        default: 20
    },
    enrolledCount: {
        type: Number,
        default: 0
    },
    image: String,
    category: String,
}, {
    timestamps: true,
});

export default mongoose.model("Class", classSchema);