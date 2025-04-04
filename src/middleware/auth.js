import jwt from "jsonwebtoken";
import { config } from "dotenv";
import User from "../models/userModels.js";
config();

export const verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403).json({ message: "No token provided!" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
    req.userId = decodedToken.userId;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User is not found nahuh!!" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unautherized!" });
  }
};
