const categoriesRouter = require('express').Router();
const validateToken = require('../auth/validateToken');
const { categoryController } = require('../controller');

categoriesRouter
  .post('/', validateToken, categoryController.insertCategory)
  .get('/', validateToken, categoryController.getAllCategories);

module.exports = categoriesRouter;