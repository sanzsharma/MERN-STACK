import bcrypt from "bcrypt";
import { Detail, WebUser } from "../schema/model.js";
import { sendMail } from "../utils/sendmail.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constant/constant.js";
export const createDetailController = async (req, res) => {
  try {
    let data = req.body;
    let result = await Detail.create(data);
    res.json({
      success: true,
      message: "user created successfully.",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readAllDetailController = async (req, res) => {
  try {
    let result = await Detail.find({});
    res.status(200).json({
      success: true,
      message: "Detail read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readDetailByIdController = async (req, res) => {
  // console.log(req.params);
  let detailId = req.params.detailId;

  try {
    let result = await Detail.findById(detailId);

    res.status(200).json({
      success: true,
      message: "Detail read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateDetailByIdController = async (req, res) => {
  let detailId = req.params.detailId;
  let data = req.body;

  try {
    let result = await Detail.findByIdAndUpdate(detailId, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Detail updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteDetailByIdController = async (req, res) => {
  let detailId = req.params.detailId;

  try {
    let result = await Detail.findByIdAndDelete(detailId);
    res.status(200).json({
      success: true,
      message: "Detail deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// in bcrypt package
// let hashedPassword = await bcrypt.hash(password, 10) for hashing
//                                            password,   hashedPassword
// let isValidPassoed=  await bcrypt.compare("Password@1","$2b$10$pbDKu2eQkyzPWnHLIZbWS.lgW/YweaSJA./vy51vbcd7p5VhhduK2")
// this code will return either true or false
// it return true if hashPassword is made from password else it return false
