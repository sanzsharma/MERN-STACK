import { Schema } from "mongoose";

let studentSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },

  class: {
    type: Number,
    required: [true, "class field id required"],
  },

  facaulty: {
    type: String,
    required: [true, "facaulty field is required"],
  },
});

export default studentSchema;
