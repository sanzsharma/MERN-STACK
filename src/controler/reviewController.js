import { Review } from "../schema/model.js";

export const createReviewController = async (req, res) => {
  let data = req.body;

  try {
    let result = await Review.create(data);
    res.status(201).json({
      success: true,
      message: "Review created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllReviewController = async (req, res) => {
  try {
    let result = await Review.find({})
      .populate("userId", "name", "-_Id")
      .populate("productId", "name");
    res.status(200).json({
      success: true,
      message: "Review read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readReviewByIdController = async (req, res) => {
  // console.log(req.params);
  let reviewId = req.params.reviewId;

  try {
    let result = await Review.findById(reviewId);

    res.status(200).json({
      success: true,
      message: "Review read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateReviewByIdController = async (req, res) => {
  let reviewId = req.params.reviewId;
  let data = req.body;

  try {
    let result = await Review.findByIdAndUpdate(reviewId, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Review updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteReviewByIdController = async (req, res) => {
  let reviewId = req.params.reviewId;

  try {
    let result = await Review.findByIdAndDelete(reviewId);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
