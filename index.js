import express from "express";
import userRouter from "./routes/users.js";
import productRouter from "./routes/products.js";
import invoiceRouter from "./routes/invoices.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.use("/assets", express.static(path.join(__dirname, "assets")));

connectDB();

// MIDDLEWARE
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/invoices", invoiceRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my silly api!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
