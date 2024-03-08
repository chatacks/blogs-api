const appRouter = require('express').Router();
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');

appRouter.use('/login', loginRouter);
appRouter.use('/user', userRouter);
appRouter.use('/categories', categoriesRouter);

module.exports = appRouter;