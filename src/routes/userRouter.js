// //define router
// import { Router } from "express";
// import {
//   createUserController,
//   deleteUserByIdController,
//   readAllUserController,
//   readUserByIdController,
//   updateUserByIdController,
// } from "../controler/userControler";

// let userRouter = Router();

// userRouter.route("/").post(createUserController).get(readAllUserController);

// userRouter
//   .route("/:userId")
//   .get(readUserByIdController)
//   .patch(updateUserByIdController)
//   .delete(deleteUserByIdController);

// export default userRouter;

//define router
// import { Router } from "express";
// import { Router } from "express";
// import {
//   createUserController,
//   deleteUserByIdController,
//   readAllUserController,
//   readUserByIdController,
//   updateUserByIdController,
// } from "../controller/userController.js";

// let userRouter = Router();

// userRouter.route("/").post(createUserController).get(readAllUserController);

// userRouter
//   .route("/:userId")
//   .get(readUserByIdController)
//   .patch(updateUserByIdController)
//   .delete(deleteUserByIdController);

// export default userRouter;

//define router
import { Router } from "express";
import {
  createUserController,
  deleteUserByIdController,
  readAllUserController,
  readUserByIdController,
  updateUserByIdController,
} from "../controler/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUserController).get(readAllUserController);

userRouter
  .route("/:userId")
  .get(readUserByIdController)
  .patch(updateUserByIdController)
  .delete(deleteUserByIdController);

export default userRouter;
