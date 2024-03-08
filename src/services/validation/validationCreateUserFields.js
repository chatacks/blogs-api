const { insertValidationSchema } = require('./schemas');

const validationCreateUserFields = (userFields) => {
  const { error } = insertValidationSchema.validate(userFields);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = validationCreateUserFields;