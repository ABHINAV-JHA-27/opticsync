import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;

async function dbConnection() {
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);
    }
}

export default dbConnection;
