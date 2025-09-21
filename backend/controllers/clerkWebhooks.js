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
        // Debug: Log the entire request
        console.log("=== WEBHOOK DEBUG ===");
        console.log("Request headers:", req.headers);
        console.log("Request body type:", typeof req.body);
        console.log("Request body:", JSON.stringify(req.body, null, 2));
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

        // Try different ways to access the data
        let data, type;
        
        // Method 1: Direct access
        if (req.body && req.body.data && req.body.type) {
            data = req.body.data;
            type = req.body.type;
            console.log("Method 1 - Direct access worked");
        }
        // Method 2: Check if it's nested differently
        else if (req.body && req.body.payload) {
            data = req.body.payload.data;
            type = req.body.payload.type;
            console.log("Method 2 - Payload access worked");
        }
        // Method 3: Check if it's the data itself
        else if (req.body && req.body.id) {
            data = req.body;
            type = req.body.type || 'user.created';
            console.log("Method 3 - Direct data access worked");
        }
        else {
            console.log("Could not find data in any expected format");
            return res.json({success: false, message: "Could not parse webhook data"});
        }

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