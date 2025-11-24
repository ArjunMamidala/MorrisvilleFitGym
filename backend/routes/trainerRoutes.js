// routes/trainerRoutes.js
import express from "express";
import Trainers from "../models/Trainers.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeAdmin } from "../middleware/authorizeAdmin.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const trainers = await Trainers.find();
    res.status(200).json({ trainers });
  } catch (error) {
    console.error("Error fetching trainers: ", error);
    res.status(500).json({ error: "There was an error fetching trainers." });
  }
});

router.post("/add", protect, authorizeAdmin, async (req, res) => {
  try {
    const { name, specialization, bio, image } = req.body;
    if (!name || !specialization || !bio || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTrainer = new Trainers({ name, specialization, bio, image });
    await newTrainer.save();
    res.status(201).json({ message: "Trainer added successfully", trainer: newTrainer });
  }
  catch (error) {
    console.error("Error adding trainer: ", error);
    res.status(500).json({ error: "There was an error adding the trainer." });
  }
})

router.delete("/:id", protect, authorizeAdmin, async (req,res) => {
  try {
    const { id } = req.params;
    const trainerToDelete = await Trainers.findById(id);
    if(!trainerToDelete) {
      return res.status(404).json({ error: "Trainer not found" });
    }
    await trainerToDelete.deleteOne()
    res.status(200).json({ message: "Trainer deleted successfully", trainerId: id });
  }
  catch (error) {
    console.error("Error deleting trainer: ", error);
    res.status(500).json({ error: "There was an error deleting the trainer." });
  }
})

export default router;