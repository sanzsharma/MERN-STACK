import { Schema } from "mongoose";

let departmentSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },

  hod: {
    type: String,
    required: [true, "hod field is required"],
  },

  totalmember: {
    type: Number,
    required: [true, "totalmember field is required"],
  },
});

export default departmentSchema;
