//define router
import { Router } from "express";
import {
  createProductController,
  deleteProductByIdController,
  readAllProductController,
  readProductByIdController,
  updateProductByIdController,
} from "../controler/productController.js";
import validation from "../middleware/validation.js";
import productVAlidation from "../validation/productValidation.js";

let productRouter = Router();

productRouter
  .route("/")
  .post(validation(productVAlidation), createProductController)
  .get(readAllProductController);

productRouter
  .route("/:productId")
  .get(readProductByIdController)
  .patch(updateProductByIdController)
  .delete(deleteProductByIdController);

export default productRouter;
