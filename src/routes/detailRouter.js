import { Router } from "express";
import {
  createDetailController,
  deleteDetailByIdController,
  readAllDetailController,
  readDetailByIdController,
  updateDetailByIdController,
} from "../controler/detailController.js";

let detailRouter = Router();

detailRouter.route("/").post(createDetailController);
//   .get(readAllDetailController);

// detailRouter
//   .route("/:detailId")
//   .get(readDetailByIdController)
//   .patch(updateDetailByIdController)
//   .delete(deleteDetailByIdController);

export default detailRouter;
