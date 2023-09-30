import { Schema } from "mongoose";

let randomSchema = Schema({
  name: {
    type: String,
    //data manipulation
    //uppercase:true,
    //lowecase:true,
    //trim:true,
    //default:"shyam"

    //validation***

    // required: [true, "name field must be required"],

    // minlength: [3, "length must be at least 3 character"],
    // maxlength: [10, "lenght must be at most be 10 character"],
  },
  age: {
    type: Number,
    // required: "age field is required",
    // min: [18, "age field must be at least 18"],
    // max: [28, "age field must be at most 28"],
  },
  isMarried: {
    type: Boolean,
    // required: "isMarrid field is required",
  },
  password: {
    type: String,
    // required: "password field is required",
    // min: [1000000000, "phoneNumber must be at exact 10 character"],
    // max: [9999999999, "phoneNumber must be at must 20 character"],
  },
  phoneNumber: {
    type: Number,
    // required: "phoneNumber field is required",
  },
  roll: {
    type: Number,
    // required: "roll field is required",
  },
  spouseName: {
    type: String,
    // required: "spouseName field is required",
  },
  email: {
    type: String,
    // required: "email field is required",
  },
  gender: {
    type: String,
    // required: "gender field is required",
    //validation
    // enum: {
    //   values: ["male", "female", "other"],
    //   message: (notEnum) => {
    //     return `${notEnum.value} is not valid enum`;
    //   },
    // },
  },
  dob: {
    type: Date,
    // required: "dob field is required",
  },
  location: {
    country: {
      type: String,
      // required: "country field is required",
    },
    exactLocation: {
      type: String,
      // required: "exactLocation field is required",
    },
  },
  favTeacher: [
    {
      type: String,
      // required: "favTeacher field is required",
    },
  ],
  favSubject: [
    {
      bookName: {
        type: String,
        // required: "bookName field is required",
      },
      bookAuthor: {
        type: String,
        // required: "bookAuthor field is required",
      },
    },
  ],
});

export default randomSchema;
