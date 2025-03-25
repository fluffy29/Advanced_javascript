import express from "express";
import router from "./routes/users.js";
const app = express();
import { config } from "dotenv";
config();
const port = process.env.PORT || 3000;

import connectDB from "./utils/db.js";
import hashPassword from "./middleware/passencrypt.js";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());

app.use(hashPassword);

connectDB();

app.use("/api/users", router);

app.get("/", (req, res) => {
  res.send("Welcome to my silly API !!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
