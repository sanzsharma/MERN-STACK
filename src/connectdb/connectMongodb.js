import mongoose from "mongoose";
import { dbUrl } from "../constant/constant.js";

let connectDb = async () => {
  try {
    await mongoose.connect(`${dbUrl}`);
    console.log("application is connected to mongodb successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
