import mongoose from "mongoose";
import { DATABASE } from "./config.js";

//mongoDb conncection
export const mongoDbConnection = async () => {
  try {
    const connect = mongoose.connect(DATABASE, { autoIndex: true });
    console.log(`mongoDb connection successfully`.bgGreen.yellow);
  } catch (error) {
    console.log(error.message);
  }
};
