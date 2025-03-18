const express = require("express");
const router = express.Router();
const { hashPassword } = require("../middleware/passencrypt");

router.get("/", (req, res) => {
  const { firstName, email, password } = req.query;
  res.json({ firstName, email, password });
});

router.post ("/", hashPassword, (req, res) => {
  const { firstName, email, password } = req.body;
  const hashedPassword = req.body.password;
  res.json({
    firstName,
    email,
    hashedPassword,
    _id: "randomId4567",
  });

  console.log(firstName, email, password);
  res.send("you have reached the post request !! ");
});

module.exports = router;
