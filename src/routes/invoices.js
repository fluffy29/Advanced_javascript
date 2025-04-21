import { Router } from "express";
import {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from "src/controllers/invoiceControllers.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

router.get("/", getAllInvoices);

router.get("/:id", getInvoiceById);

router.post("/", verifyToken, createInvoice);

router.put("/:id", verifyToken, updateInvoice);

router.delete("/:id", verifyToken, deleteInvoice);

export default router;
