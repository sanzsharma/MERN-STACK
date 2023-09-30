import { Schema } from "mongoose";

let reviewSchema = Schema({
  userId: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "name field is required."],
  },
  productId: {
    type: Schema.ObjectId,
    ref: "Product",
    required: [true, "price field is required."],
  },
  description: {
    type: String,
    required: [true, "quantity field is required."],
  },
});

export default reviewSchema;
