//define router
import { Router } from "express";
import {
  createWebUserController,
  deleteSpecificUserController,
  forgetPasswordController,
  loginUser,
  myProfile,
  readAllUserController,
  readSpecificUserController,
  resetPasswordController,
  updateProfile,
  updateSpecificUserController,
  verifyEmailController,
} from "../controler/webUserController.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constant/constant.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import isAuthorized from "../middleware/isAuthorized.js";

let webUserRouter = Router();

webUserRouter.route("/").post(createWebUserController);

webUserRouter.route("/verify-email").patch(verifyEmailController);
webUserRouter.route("/login").post(loginUser);
webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);

webUserRouter.route("/").get(readAllUserController);
webUserRouter.route("/forget-password").post(forgetPasswordController);
webUserRouter
  .route("/reset-password")
  .patch(isAuthenticated, resetPasswordController);
webUserRouter
  .route("/:id")
  .get(
    isAuthenticated,
    // isAuthorized(["admin", "superAdmin"]),
    readSpecificUserController
  )
  .delete(
    isAuthenticated,
    isAuthorized(["superAdmin"]),
    deleteSpecificUserController
  )
  .patch(
    isAuthenticated,
    isAuthorized(["admin", "superAdmin"]),
    updateSpecificUserController
  );

// webUserRouter.route("/update-profile").post(updatedProfileController);

export default webUserRouter;

//middleware:
//they are function
//which has req,res,next

//note;
// webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
// back thing are always kept to controller and
//fornt thing  are always kept to middleware
