import { Router } from "express";
import { userLogIn, userSignUp } from "../controllers/userControllers.js";
const router = Router();

router.get("/", userLogIn);

router.post("/", userSignUp);

export default router;
