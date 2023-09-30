import { Schema } from "mongoose";

let addressSchema = Schema({
  label: {
    type: String,
    required: [true, "label field is required."],
  },
  country: {
    type: String,
    required: [true, "country field is required."],
  },
  province: {
    type: Number,
    required: [true, "province field is required."],
  },
  municipality: {
    type: String,
    required: [true, "municipality field is required."],
  },
  wardNo: {
    type: String,
    required: [true, "wardNo field is required."],
  },
  district: {
    type: String,
    required: [true, "district field is required."],
  },
  exactLocation: {
    type: String,
    required: [true, "exactLocation field is required."],
  },
});

export default addressSchema;
