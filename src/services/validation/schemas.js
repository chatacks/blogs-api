const Joi = require('joi');

const insertValidationSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const nameCategoryValdiation = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  insertValidationSchema,
  nameCategoryValdiation,
};