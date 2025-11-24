// routes/membershipRoutes.js
import express from "express";
import Membership from "../models/Memberships.js";

const router = express.Router();

// Route to get all memberships
router.get("/memberships", async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.status(200).json(memberships);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;