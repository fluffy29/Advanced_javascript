const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: int,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

exports.userSignUp = async (req, res) => {
  const { firstName, email, lastName, imageUrl, role } = req.body;
  const hashedPassword = req.hashedPassword;

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    imageUrl,
    role,
    inventory: [],
  });

  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
};
