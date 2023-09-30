import { Schema } from "mongoose";

let classRoomSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },

  numberofBench: {
    type: Number,
    required: [true, " numberofBench field is required"],
  },

  hasTv: {
    type: Boolean,
    required: [true, " hasTv field is required"],
  },
});

export default classRoomSchema;
