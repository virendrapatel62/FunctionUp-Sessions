const { validateUserToken, isAdmin } = require("../utils/jwt");

exports.userAuthMiddlware = (request, response, next) => {
  console.log("useAuthMiddlware");
  next();
};

exports.adminAuthMiddleware = (request, response, next) => {
  console.log(request.headers);
  const token = request.headers.authorization;
  const result = isAdmin(token);
  if (result) {
    console.log(result);
    request.user = result.payload;
    next();
  }

  response.status(401).send();
};
