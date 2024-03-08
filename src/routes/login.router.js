const loginRouter = require('express').Router();
const { loginController } = require('../controller');
const validateEmailAndPassword = require('../middlewares/validateEmailAndPassword');
const validatePerson = require('../middlewares/validatePerson');

loginRouter.post('/', validateEmailAndPassword, validatePerson, loginController.signIn);

module.exports = loginRouter;