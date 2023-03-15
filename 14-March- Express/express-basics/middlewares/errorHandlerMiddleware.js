function errorHandlerMiddleware(error, request, response, next) {
  response
    .status(response.statusCode === 200 ? 500 : response.statusCode)
    .json(error.meta);
}

exports.errorHandlerMiddleware = errorHandlerMiddleware;
