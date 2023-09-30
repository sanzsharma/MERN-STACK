import { User } from "../schema/model.js";
import bcrypt from "bcrypt";

export const createUserController = async (req, res) => {
  let hashedPassowrd = await bcrypt.hash(req.body.password, 10);

  let data = {
    ...req.body,
    password: hashedPassowrd,
  };

  try {
    let result = await User.create(data);
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllUserController = async (req, res) => {
  try {
    let result = await User.find({});
    res.status(200).json({
      success: true,
      message: "User read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readUserByIdController = async (req, res) => {
  // console.log(req.params);
  let userId = req.params.userId;

  try {
    let result = await User.findById(userId);

    res.status(200).json({
      success: true,
      message: "User read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateUserByIdController = async (req, res) => {
  let userId = req.params.userId;
  let data = req.body;

  try {
    let result = await User.findByIdAndUpdate(userId, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "User updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteUserByIdController = async (req, res) => {
  let userId = req.params.userId;

  try {
    let result = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
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
