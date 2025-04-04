import { Router } from "express";
import { userLogIn, userSignUp } from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/auth.js";
import upload from "../middleware/multerConfig.js";
import sharpMiddleware from "../middleware/sharpMiddleware.js";
const router = Router();

router.post("/login", userLogIn);

router.post("/signup", userSignUp);

router.put(
  "/updateUser",
  verifyToken,
  upload.single("image"),
  sharpMiddleware(),
  (req, res) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "There seems an error uploading it? " });
    }
    console.log(req.body);
    console.log(req.file);
    console.log(req.userId);
    const fileUrl =
      req.protocol + "://" + req.get("host") + "/" + req.file.processedPath;
    res.json({ message: "User response reached", fileUrl });
  }
);
export default router;
