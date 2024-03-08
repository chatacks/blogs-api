const userRouter = require('express').Router();
const validateToken = require('../auth/validateToken');
const { userController } = require('../controller');

userRouter
  .get('/', validateToken, userController.getAllUsers)
  .get('/:userId', validateToken, userController.getUser)
  .post('/', userController.createUser);

module.exports = userRouter;