//define router
import { Router } from "express";
import {
  createRandomController,
  deleteRandomByIdController,
  readAllRandomController,
  readRandomByIdController,
  updateRandomByIdController,
} from "../controler/randomControler.js";
import Joi from "joi";
import validation from "../middleware/validation.js";
import randomValidation from "../validation/randomValidation.js";

let randomRouter = Router();

let m0 = (value) => {
  return (req, res, next) => {
    console.log("i am middleware 0");
    if (value) {
      next();
    } else {
    }
  };
};

let m1 = (req, res, next) => {
  console.log("i am m1 middleware");
};

let deleteUser = (req, res, next) => {
  console.log("user deleted succesfully");
};
let isAuthorized = (value) => {
  return (req, res, next) => {
    if (value === "admin" || value === "superadmin") {
      next();
    } else {
      console.log("you can not delete User");
    }
  };
};
//without function (use if you dont want to passs value) (req, res, next)
//with function call( use if you to pass value) ()=>{req, res,next}=>{}

randomRouter
  .route("/") //localhost:8000/randoms
  // .post(m0(false), m1)
  // .post(isAuthorized("superadmin"), deleteUser)
  .post(validation(randomValidation), createRandomController)

  .get(readAllRandomController);

randomRouter
  .route("/:randomId")
  .get(readRandomByIdController)
  .patch(updateRandomByIdController)
  .delete(deleteRandomByIdController);

export default randomRouter;
