import mongoose from "mongoose";

const connection = {
  isConnected: false // Initialize isConnected flag
};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    // If not already connected, establish connection
    const db = await mongoose.connect(process.env.MONGO);

    // Update isConnected flag
    connection.isConnected = db.connections[0].readyState === 1;

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error
  }
};
