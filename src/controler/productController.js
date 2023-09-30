import { Product } from "../schema/model.js";

export const createProductController = async (req, res) => {
  let data = req.body;

  try {
    let result = await Product.create(data);
    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllProductController = async (req, res) => {
  try {
    let result = await Product.find({});
    res.status(200).json({
      success: true,
      message: "Product read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readProductByIdController = async (req, res) => {
  // console.log(req.params);
  let productId = req.params.productId;

  try {
    let result = await Product.findById(productId);

    res.status(200).json({
      success: true,
      message: "Product read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateProductByIdController = async (req, res) => {
  let productId = req.params.productId;
  let data = req.body;

  try {
    let result = await Product.findByIdAndUpdate(productId, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Product updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteProductByIdController = async (req, res) => {
  let productId = req.params.productId;

  try {
    let result = await Product.findByIdAndDelete(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
