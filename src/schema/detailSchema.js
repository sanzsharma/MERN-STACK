import { Schema } from "mongoose";

let detailSchema = Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName field is required"],
    },

    address: {
      type: String,
      required: [true, "address field is required"],
    },

    phoneNumber: {
      type: Number,
      required: [true, "phoneNumber field is required"],
    },

    email: {
      type: String,
      unique: true,
      required: [true, "email filed is required"],
    },
  },
  { timeStamps: true }
);

export default detailSchema;

// @channel do crud for
// {
//     "fullName":"nitan",
//     "address":"gagalphedi",
//     "phoneNumber":9849468999,
//     "email":"nitanthapa425@gmail.com"
