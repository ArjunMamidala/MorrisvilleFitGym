// routes/bookingRoutes.js
import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Route to book a session
router.post("/book", async (req, res) => {
  const { userId, trainerId, timeSlot } = req.body;

  try {
    const booking = new Booking({
      userId,
      trainerId,
      timeSlot,
    });

    await booking.save();
    res.status(200).json({ success: true, message: "Booking confirmed" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
