const mongoose = require("mongoose");
const dontenv = require("dotenv");
dontenv.config();

const mongoConnection =
  "mongodb+srv://fluffy:Acsdoha2023@cluster0.dhjdy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(mongoConnection);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("No DB connection!", error);
    process.exit(1);
  }
};

module.exports = connectDB;


