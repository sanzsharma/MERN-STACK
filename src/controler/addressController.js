// import { Address } from "../schema/model.js";

import { Address } from "../schema/model.js";

export const createAddressController = async (req, res) => {
  let data = req.body;

  try {
    let result = await Address.create(data);
    res.status(201).json({
      success: true,
      message: "Address created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      message: error.message,
    });
  }
};

export const readAllAddressController = async (req, res) => {
  try {
    let result = await Address.find({});
    res.status(200).json({
      success: true,
      message: "Address read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readAddressByIdController = async (req, res) => {
  // console.log(req.params);
  let addressId = req.params.addressId;

  try {
    let result = await Address.findById(addressId);

    res.status(200).json({
      success: true,
      message: "Address read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateAddressByIdController = async (req, res) => {
  let addressId = req.params.addressId;
  let data = req.body;

  try {
    let result = await Address.findByIdAndUpdate(addressId, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Address updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteAddressByIdController = async (req, res) => {
  let addressId = req.params.addressId;

  try {
    let result = await Address.findByIdAndDelete(addressId);
    res.status(200).json({
      success: true,
      message: "Address deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
