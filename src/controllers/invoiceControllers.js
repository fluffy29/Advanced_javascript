import Invoice from "../models/invoiceModels.js";

export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching invoices" });
  }
};

export const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: "Error fetching invoice" });
  }
};

export const createInvoice = async (req, res) => {
  try {
    const { customerName, items, totalAmount } = req.body;
    const newInvoice = new Invoice({ customerName, items, totalAmount });
    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    res.status(500).json({ message: "Error creating invoice" });
  }
};

export const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { customerName, items, totalAmount } = req.body;
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      { customerName, items, totalAmount },
      { new: true }
    );
    if (!updatedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json(updatedInvoice);
  } catch (error) {
    res.status(500).json({ message: "Error updating invoice" });
  }
};

export const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInvoice = await Invoice.findByIdAndDelete(id);
    if (!deletedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting invoice" });
  }
};