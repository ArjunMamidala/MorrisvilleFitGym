// import User from "../models/User.js";
// import { Webhook } from "svix";

// const clerkWebhooks = async (req, res) => {
//     try {
//     //     // Create an Svix instance with Clerk webhook secret
//     //     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

//     //     const headers = {
//     //         "svix-id": req.headers["svix-id"], 
//     //         "svix-timestamp": req.headers["svix-timestamp"],
//     //         "svix-signature": req.headers["svix-signature"],
//     //     };

//     //     await whook.verify(JSON.stringify(req.body), headers);

//         const { data, type } = req.body

//         // const userData = {
//         //     _id: data.id,
//         //     email: data.email_addresses[0].email_address,
//         //     username: data.first_name + " " + data.last_name,
//         //     image: data.image_url, 
//         // }

//         const userData = {
//             _id: data.id,
//             email: data.email_addresses?.[0]?.email_address || 'no-email@example.com',
//             username: (data.first_name || '') + " " + (data.last_name || ''),
//             image: data.image_url || '', 
//         }
//         //Switch cases for different events
//         switch (type) {
//             case "user.created": {
//                 await User.create(userData)
//                 break;
//             }
//             case "user.updated": {
//                 await User.findByIdAndUpdate(data.id, userData)
//                 break;
//             }
//             case "user.deleted": {
//                 await User.findByIdAndDelete(data.id)
//                 break;
//             }
//             default:
//                 break;
//         }
//         res.json({success: true, message: "Webhook Received"})
//     }
//     catch(error) {
//         console.log(error.message);
//         res.json({success: false, message: error.message});
//     }
// }

// export default clerkWebhooks;


import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
    try {
        console.log("=== WEBHOOK DEBUG ===");
        console.log("Request body:", req.body);
        console.log("Request body type:", typeof req.body);
        console.log("===================");

        // Temporarily disable signature verification for testing
        /*
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const headers = {
            "svix-id": req.headers["svix-id"], 
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };
        await whook.verify(JSON.stringify(req.body), headers);
        */

        const { data, type } = req.body;

        console.log("Extracted data:", data);
        console.log("Extracted type:", type);

        if (!data || !data.id) {
            console.log("No valid data or id found");
            return res.json({success: false, message: "No valid data or id found"});
        }

        const userData = {
            _id: data.id,
            email: data.email_addresses?.[0]?.email_address || 'no-email@example.com',
            username: `${data.first_name || ''} ${data.last_name || ''}`.trim() || 'Unknown User',
            image: data.image_url || '', 
        };

        console.log("User data to create:", userData);

        //Switch cases for different events
        switch (type) {
            case "user.created": {
                await User.create(userData);
                console.log("User created successfully");
                break;
            }
            case "user.updated": {
                await User.findByIdAndUpdate(data.id, userData);
                console.log("User updated successfully");
                break;
            }
            case "user.deleted": {
                await User.findByIdAndDelete(data.id);
                console.log("User deleted successfully");
                break;
            }
            default:
                console.log("Unknown event type:", type);
                break;
        }
        res.json({success: true, message: "Webhook Received"})
    }
    catch(error) {
        console.log("Webhook error:", error.message);
        res.json({success: false, message: error.message});
    }
}

export default clerkWebhooks;