import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB()

const app = express();
app.use(cors()); //Enable Cross-Origin Resource Sharing

//API to listen to Clerk Webhookds
app.post("/api/clerk/webhooks", clerkWebhooks);

// Middleware
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => {
    res.send("API is working");
})

const PORT = process.env.PORT || 3105;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));