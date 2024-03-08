const categoriesRouter = require('express').Router();
const validateToken = require('../auth/validateToken');
const { categoryController } = require('../controller');

categoriesRouter
  .post('/', validateToken, categoryController.insertCategory);

module.exports = categoriesRouter;