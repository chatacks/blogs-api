const appRouter = require('express').Router();
const loginRouter = require('./login.router');
const userRouter = require('./user.router');

appRouter.use('/login', loginRouter);
appRouter.use('/user', userRouter);

module.exports = appRouter;