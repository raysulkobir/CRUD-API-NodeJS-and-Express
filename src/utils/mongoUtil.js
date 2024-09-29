// utils/mongoUtil.js

const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection setup
const uri = "mongodb+srv://raysulmern:raysulmern2024@cluster0.gyysv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToMongo() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Successfully connected to MongoDB.");
        return client;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error; // Rethrow the error to handle it at the caller level
    }
}

module.exports = { connectToMongo };
