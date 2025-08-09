import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected Successfully.`);
  } catch (error) {
    console.log(`Database Connection Failed : ${error}`);
    process.exit(1);
  }
};

export default connectDB;
