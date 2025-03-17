const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require("./routes/users");

app.use(express.json());

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
