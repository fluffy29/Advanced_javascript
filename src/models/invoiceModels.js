import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const invoiceSchema = new Schema(
  {
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    amountDue: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

invoiceSchema.plugin(uniqueValidator);

export default model("invoiceSchema", invoiceSchema);