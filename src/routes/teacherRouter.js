//define router
import { Router } from "express";
import {
  createTeacherController,
  deleteTeacherByIdController,
  readAllTeacherController,
  readTeacherByIdController,
  updateTeacherByIdController,
} from "../controler/teacherControler.js";

let teacherRouter = Router();

// teachers/1234234234
//Teacher.create(data)
//Teacher.find({})
//Teacher.findById(id)
//Teacher.findByIdAndDelete(id)
//Teacher.findByIdAndUpdated(id,data)

teacherRouter
  .route("/") //localhost:8000/teachers
  .post(createTeacherController)
  .get(readAllTeacherController);

teacherRouter
  .route("/:teacherId")
  .get(readTeacherByIdController)
  .patch(updateTeacherByIdController)
  .delete(deleteTeacherByIdController);

export default teacherRouter;

//status code

//success  2XX
//create  ======== 201
//read ======200
//update ======= 201
//delete ======200

//error 4XX
//404 for api not found or resource not found
//400 //bad request

//diff beteween put and patch

//put === those data are send they all are overwright

//patch ===> those data are changed and changed date are only overwright

//CRUD
//s
//m
//c
//R
//I
