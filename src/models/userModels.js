import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    inventory: {
      type: Array,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

export default model("userSchema", userSchema);
