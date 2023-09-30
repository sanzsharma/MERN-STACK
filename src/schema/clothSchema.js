import { Schema } from "mongoose";

let clothSchema = Schema({
  size: {
    type: String,
    required: [true, "size field is required"],
  },

  price: {
    type: Number,
    required: [true, "price field is required"],
  },

  quantity: {
    type: Number,
    required: [true, "quantity field is required"],
  },

  color: {
    type: String,
    required: [true, "color filed is required"],
  },

  category: {
    type: String,
    required: [true, "category filed is required"],
  },

  brand: {
    type: String,
    required: [true, "brand filed is required"],
  },

  material: {
    type: String,
    required: [true, "material  filed is required"],
  },
});

export default clothSchema;
