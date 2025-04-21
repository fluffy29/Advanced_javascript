import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", verifyToken, createProduct);

router.put("/:id", verifyToken, updateProduct);

router.delete("/:id", verifyToken, deleteProduct);

export default router;
