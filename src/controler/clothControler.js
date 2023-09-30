import { Cloth } from "../schema/model.js";

export const createClothController = async (req, res) => {
  let data = req.body;

  try {
    let result = await Cloth.create(data);
    res.status(201).json({
      success: true,
      message: "Cloth created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      message: error.message,
    });
  }
};

export const readAllClothController = async (req, res) => {
  try {
    let result = await Cloth.find({});
    res.status(200).json({
      success: true,
      message: "Cloth read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readClothByIdController = async (req, res) => {
  // console.log(req.params);
  let clothId = req.params.clothId;

  try {
    let result = await Cloth.findById(clothId);

    res.status(200).json({
      success: true,
      message: "Cloth read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateClothByIdController = async (req, res) => {
  let clothId = req.params.clothId;
  let data = req.body;

  try {
    let result = await Cloth.findByIdAndUpdate(clothId, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Cloth updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteClothByIdController = async (req, res) => {
  let clothId = req.params.clothId;

  try {
    let result = await Cloth.findByIdAndDelete(clothId);
    res.status(200).json({
      success: true,
      message: "Cloth deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
