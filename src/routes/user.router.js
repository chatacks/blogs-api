const userRouter = require('express').Router();
const validateToken = require('../auth/validateToken');
const { userController } = require('../controller');

userRouter
  .get('/', validateToken, userController.getAllUsers)
  .post('/', userController.createUser);

module.exports = userRouter;