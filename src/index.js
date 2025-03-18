const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require("./routes/users");

const connectDB = require("./utils/db");
const { connect } = require("mongoose");

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

connectDB();

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  const number = Date.now();
  req.number = number;
  next();
});

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my API! e-commerce backend 🤳");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
