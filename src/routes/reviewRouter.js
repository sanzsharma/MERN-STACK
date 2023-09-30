//define router
import { Router } from "express";
import {
  createReviewController,
  deleteReviewByIdController,
  readAllReviewController,
  readReviewByIdController,
  updateReviewByIdController,
} from "../controler/reviewController.js";

let reviewRouter = Router();

reviewRouter
  .route("/")
  .post(createReviewController)
  .get(readAllReviewController);

reviewRouter
  .route("/:reviewId")
  .get(readReviewByIdController)
  .patch(updateReviewByIdController)
  .delete(deleteReviewByIdController);

export default reviewRouter;
