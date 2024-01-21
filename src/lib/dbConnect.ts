import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let dbConnection: any;

if (process.env.NODE_ENV === "development") {
    if (!(globalThis as any)._mongoClientPromise) {
        client = new MongoClient(uri!, options);
        (globalThis as any)._mongoClientPromise = client.connect();
    }
    dbConnection = (globalThis as any)._mongoClientPromise;
} else {
    client = new MongoClient(uri!, options);
    dbConnection = client.connect();
}

export default dbConnection;
