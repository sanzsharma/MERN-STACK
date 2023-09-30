import { Teacher } from "../schema/model.js";

export const createTeacherController = async (req, res) => {
  let data = req.body;

  try {
    let result = await Teacher.create(data);
    res.status(201).json({
      success: true,
      message: "Teacher created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      message: error.message,
    });
  }
};

export const readAllTeacherController = async (req, res) => {
  try {
    let result = await Teacher.find({});
    res.status(200).json({
      success: true,
      message: "Teacher read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readTeacherByIdController = async (req, res) => {
  // console.log(req.params);
  let teacherId = req.params.teacherId;

  try {
    let result = await Teacher.findById(teacherId);

    res.status(200).json({
      success: true,
      message: "Teacher read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateTeacherByIdController = async (req, res) => {
  let teacherId = req.params.teacherId;
  let data = req.body;

  try {
    let result = await Teacher.findByIdAndUpdate(teacherId, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Teacher updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteTeacherByIdController = async (req, res) => {
  let teacherId = req.params.teacherId;

  try {
    let result = await Teacher.findByIdAndDelete(teacherId);
    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
