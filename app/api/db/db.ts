// Importing mongoose library along with Connection type from it
import mongoose, { Connection } from "mongoose";

// MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
let cachedConnection: Connection | null = null;

export async function connect(): Promise<Connection> {
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }

  try {
    const options = {
      bufferCommands: false,
    };

    const cnx = await mongoose.connect(MONGODB_URI!, options);

    cachedConnection = cnx.connection;

    console.log("New MongoDB connection established");

    return cachedConnection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
