const { Category } = require('../models');
const validationCategoryFields = require('./validation/validationCategoryFields');

const insertCategory = async (categoryFields) => {
  const error = validationCategoryFields(categoryFields);

  if (error) return { status: error.status, data: { message: error.message } };

  const newCategory = await Category.create(categoryFields);
  console.log({ newCategory });

  return { status: 'CREATED', data: newCategory.dataValues };
};

module.exports = {
  insertCategory,
};