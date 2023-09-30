//define router
import { Router } from "express";
import {
  createClothController,
  deleteClothByIdController,
  readAllClothController,
  readClothByIdController,
  updateClothByIdController,
} from "../controler/clothControler.js";

let clothRouter = Router();

// cloths/1234234234
//Cloth.create(data)
//Cloth.find({})
//Cloth.findById(id)
//Cloth.findByIdAndDelete(id)
//Cloth.findByIdAndUpdated(id,data)

clothRouter
  .route("/") //localhost:8000/cloths
  .post(createClothController)
  .get(readAllClothController);

clothRouter
  .route("/:clothId")
  .get(readClothByIdController)
  .patch(updateClothByIdController)
  .delete(deleteClothByIdController);

export default clothRouter;
