//define router
import { Router } from "express";
import {
  createAddressController,
  deleteAddressByIdController,
  readAddressByIdController,
  readAllAddressController,
  updateAddressByIdController,
} from "../controler/addressController.js";
// import {
//   createAddressController,
//   deleteAddressByIdController,
//   readAllAddressController,
//   readAddressByIdController,
//   updateAddressByIdController,
// } from "../controler/addressControler.js";

let addressRouter = Router();

// addresss/1234234234
//Address.create(data)
//Address.find({})
//Address.findById(id)
//Address.findByIdAndDelete(id)
//Address.findByIdAndUpdated(id,data)

addressRouter
  .route("/") //localhost:8000/addresss
  .post(createAddressController)
  .get(readAllAddressController);

addressRouter
  .route("/:addressId")
  .get(readAddressByIdController)
  .patch(updateAddressByIdController)
  .delete(deleteAddressByIdController);

export default addressRouter;
