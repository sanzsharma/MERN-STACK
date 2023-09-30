import { model } from "mongoose";
import bookSchema from "./bookSchema.js";
import classRoomSchema from "./classRoomSchema.js";
import collegeSchema from "./collegeSchema.js";
import departmentSchema from "./departmentSchema.js";
import studentSchema from "./studentSchema.js";
import teacherSchema from "./teacherSchem.js";
import clothSchema from "./clothSchema.js";
import randomSchema from "./randomSchema.js";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import webUserSchema from "./webUser.js";
import detailSchema from "./detailSchema.js";
import addressSchema from "./addressSchema.js";

//schema
//array name must be same as model
//array name must be singular and must start with capital letter
export let Teacher = model("Teacher", teacherSchema);
export let Cloth = model("Cloth", clothSchema);

export let Book = model("Book", bookSchema);
export let Student = model("Student", studentSchema);
export let College = model("College", collegeSchema);
export let ClassRoom = model("ClassRoom ", classRoomSchema);
export let Department = model("Department", departmentSchema);
export let Random = model("Random", randomSchema);
export let User = model("User", userSchema);
export let Product = model("Product", productSchema);
export let Review = model("Review", reviewSchema);
export let WebUser = model("WebUser", webUserSchema);
export let Detail = model("Detail", detailSchema);
export let Address = model("Address", addressSchema);
