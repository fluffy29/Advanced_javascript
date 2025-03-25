import { set, connect } from "mongoose";
import { config } from "dotenv";

config();

const uri =
  process.env.NODE_ENV === "dev"
    ? process.env.LOCAL_DB_CONNECTION
    : process.env.DB_CONNECTION;

const mongoConnection = uri;

set("strictQuery", true);

const connectDB = async () => {
  try {
    await connect(mongoConnection);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("No DB connection!", error);
    process.exit(1);
  }
};

export default connectDB;
