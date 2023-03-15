const express = require("express");
const { authMiddleware } = require("./authMiddlewares");
const { errorHandlerMiddleware } = require("./errorHandlerMiddleware");

exports.registerMiddlewares = (app) => {
  app.use(express.json());
};
