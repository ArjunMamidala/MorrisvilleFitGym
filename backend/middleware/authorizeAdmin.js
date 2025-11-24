// middleware/authorizeAdmin.js
export const authorizeAdmin = (req, res, next) => {
    // Check if the authenticated user is an admin
    if (req.user.role !== "admin") {
        return res.status(403).json({ success: false, message: "Access denied: Admins only" });
    }

    // Proceed to the next middleware/route handler
    next();
};