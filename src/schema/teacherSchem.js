import { Schema } from "mongoose";

let teacherSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },

  age: {
    type: Number,
    required: [true, "Number field is required"],
  },

  isMarried: {
    type: Boolean,
    required: [true, "IsMarried field is required"],
  },

  subject: {
    type: String,
    required: [true, "subject filed is required"],
  },
});

export default teacherSchema;
