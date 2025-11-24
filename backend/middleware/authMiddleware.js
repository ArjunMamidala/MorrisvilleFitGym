import User from "../models/User.js";

// Middleware to check if the user is authenticated

export const protect = async (req, res, next) => {
    const { userId } = req.auth() || {};
    console.log("=== AUTH MIDDLEWARE DEBUG ===");
    console.log("Clerk userId:", userId);

    if (!userId) {
        return res.status(401).json({success: false, message: "Not authenticated"});
    }
    try {
        console.log("Looking for user with _id:", userId);
        const user = await User.findById(userId);
        console.log("User found:", user);

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        req.user = user;
        next();
    }
    catch (error) {
        console.error("=== ERROR IN MIDDLEWARE ===");
        console.error("Error details:", error);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
} 
