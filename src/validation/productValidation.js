import Joi from "joi";

let productVAlidation = Joi.object()
  .keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
  })
  .unknown(true);

export default productVAlidation;
