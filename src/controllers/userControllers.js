import userModel from "../models/userModels.js";
const { User } = userModel;
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { compare } from "bcrypt";

config();

export const userLogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      throw new Error("User not found.");
    }

    const paswwordMatch = await compare(password, foundUser.password);

    if (!paswwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { userId: foundUser._id },
      process.env.SECRET_TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).send(token);
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const userSignUp = async (req, res) => {
  try {
    const { firstName, email, lastName, imageUrl, role, inventory } = req.body;
    const hashedPassword = req.hashedPassword;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      imageUrl,
      inventory: [],
    });
    const savedUser = await newUser.save();
    res.status(201).json({
      firstName: savedUser.firstName,
      email: savedUser.email,
      role: savedUser.role,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });

    console.log("Request Body:", req.body);
    console.log("Password Received:", req.body.password);
  }
};
