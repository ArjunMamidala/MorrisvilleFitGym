// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         mongoose.connection.on("connected", () => console.log("Database connected"));
//         await mongoose.connect(`${process.env.MONGODB_URL}/morrisvillegymDB`)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("Database connected"));
        mongoose.connection.on("error", (err) => console.log("Database connection error:", err));
        
        // Correct connection options for Vercel/serverless
        await mongoose.connect(`${process.env.MONGODB_URL}/morrisvillegymDB`, {
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            maxPoolSize: 1, // Maintain up to 1 socket connection for serverless
            minPoolSize: 0, // Allow no connections when idle
            maxIdleTimeMS: 10000, // Close connections after 10 seconds of inactivity
            connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        });
        
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Database connection failed:", error.message);
        process.exit(1);
    }
}

export default connectDB;