import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      "Database connected!!DB HOST:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error on Database connectoin", error);
    process.exit(1);
  }
};

export default connectMongoDB;
