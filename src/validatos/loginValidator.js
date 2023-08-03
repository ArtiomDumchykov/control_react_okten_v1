import Joi from "joi";

export const loginValidators = Joi.object({
  login: Joi.string()
    .min(4)
    .max(31)
    .regex(/^[a-zA-Z0-9_]+$/)
    .required()
    .messages({
      "string.base": 'Login field should be a string',
      "string.empty": 'Login field is required',
      "string.min": "Minimum login length is 4 characters",
      "string.max": "Maximum login length is 31 characters",
      "string.pattern.base": "Login can only contain letters, numbers, and underscores",
    }),
  password: Joi.string()
    .min(5)
    .max(31)
    .regex(/^[a-zA-Z0-9_]+$/)
    .required()
    .messages({
      "string.base": 'Password field should be a string',
      "string.empty": 'Password field is required',
      "string.min": "Minimum password length is 5 characters",
      "string.max": "Maximum password length is 31 characters",
      "string.pattern.base": "Password can only contain letters, numbers, and underscores",
    }),
});
