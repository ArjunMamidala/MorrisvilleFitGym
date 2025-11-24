import Membership from "../models/Memberships.js";

// Get /api/user/

export const getUserData = async(req, res) => {
    try {
        const {_id, email, username, image, role} = req.user;

        const latestMembership = await Membership
            .findOne({ userId: _id })
            .sort({ createdAt: -1 });

        const membership = latestMembership ? {
            name: latestMembership.membershipName,
            price: latestMembership.membershipPrice,
            purchasedAt: latestMembership.createdAt,
        } : null;

        res.json({
            success: true,
            data: {
                id: _id,
                email,
                username,
                image,
                role,
                membership,
            }
        });
    }
    catch(error) {
        res.status(500).json({success: false, message: error.message})
    }
}
