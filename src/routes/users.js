const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { firstName, email, password } = req.query;
  res.json({ firstName, email, password });
});

router.post("/", (req, res) => {
  const { firstName, email, password } = req.body;
  res.json({
    firstName,
    email,
    password,
    _id: "randomId4567",
  });
  console.log(firstName, email, password);
  res.send("you have reached the post request !! ");
});

module.exports = router;
