import { Schema } from "mongoose";
//user Schema
let webUserSchema = Schema(
  {
    fullName: {
      type: String,
      required: [true, "name field is required."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email field is required."],
    },
    password: {
      type: String,
      required: [true, "password field is required."],
    },
    dob: {
      type: Date,
      required: [true, "dob is required"],
    },
    role: {
      type: String,
      default: "customer",
      required: [true, "role is required"],
    },
    gender: {
      type: String,
      default: "male",
      required: [true, "gender is required"],
    },
    isVerifiedEmail: {
      default: false,
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default webUserSchema;
