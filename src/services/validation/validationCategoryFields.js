const { nameCategoryValdiation } = require('./schemas');

const validationCategoryFields = (categoryFields) => {
  const { error } = nameCategoryValdiation.validate(categoryFields);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = validationCategoryFields;