const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("../src/routes/users");

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  const number = Date.now();
  req.number = now;
  next();
});

// app.get("/", (req, res) => {
//   res.send(req.number.toString());
// });

// app.get("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send(req.requestTime.toString());
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my API ! e-commerce backed 🤳");
});
