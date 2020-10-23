const express = require('express');
const userRouter = require('./api/users');

module.exports = (app) => {
  app.use(express.json());
  app.use('/api/users', userRouter);
};