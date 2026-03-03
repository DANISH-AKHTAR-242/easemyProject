import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI?.trim();
    if (!mongoUri) {
      throw new Error(
        "MONGO_URI is not set. Add it to your .env file before starting the server.",
      );
    }
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
