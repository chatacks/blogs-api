const appRouter = require('express').Router();
const loginRouter = require('./login.router');

appRouter.use('/login', loginRouter);

module.exports = appRouter;