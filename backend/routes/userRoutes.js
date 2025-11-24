import express from "express";
import User from "../models/User.js";
import Membership from "../models/Memberships.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.get('/me', protect, async (req, res) => {
    try {
        const user = req.user;
        const memberships = await Membership.find({ userId: user._id });

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.username,
                email: user.email,
                image: user.image,
                role: user.role,
                memberships: memberships || [],
            }
        });
    }
    catch (error) {
        console.error("Error fetching user data: ", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default userRouter;