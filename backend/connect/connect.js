import mongoose from "mongoose";
export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MongoUrl);
    console.log("mongoose connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};
