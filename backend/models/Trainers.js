// models/Trainer.js
import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  image: { type: String, required: true },
  bio: { type: String, required: true },
  availableTimes: [String], // Available times (e.g., "10:00 AM - 11:00 AM")
});

const Trainer = mongoose.model("Trainer", trainerSchema);

export default Trainer;
