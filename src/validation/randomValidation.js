import Joi from "joi";

let randomValidation = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .min(3)
      .max(7)
      .message({ "any.required": "name is required" })
      .allow(),
    age: Joi.number().required().min(2).max(4),
    isMarried: Joi.boolean().required(),
    gender: Joi.string().required().valid("male", "female", "other"),
    phoneNumber: Joi.number()
      .required()
      .custom((value, msg) => {
        let phoneNumberString = string(value);
        let phoneNumberLength = phoneNumberString.length;
        if (phoneNumberLength === 10) {
          return true;
        } else {
          return msg.message("phone number must be exact 10 character");
        }
      }),
  })
  .unknown(true);

export default randomValidation;
