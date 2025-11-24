// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "User",
        required: true,
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
    classDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["booked", "cancelled", "completed"],
        default: "booked",
    },
    checkedIn: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

bookingSchema.index({ userId: 1, classId: 1, classDate: 1 }, { unique: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
