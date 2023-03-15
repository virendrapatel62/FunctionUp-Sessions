const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("../data/user");
const { ApiError } = require("../lib/ApiError");

function authMiddleware(request, response, next) {
  const token = request.headers.authorization;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const payload = jwt.decode(token);
    getUserByEmail(payload.email).then((user) => {
      request.user = user;
      next();
    });
  } catch (error) {
    response.status(401);
    return next(
      new ApiError("Authentication Required..", {
        status: 401,
      })
    );
  }
}

function adminAuthMiddleware(request, response, next) {
  console.log(request.user);
  if (request.user.admin) {
    return next();
  }
  response.status(403);
  next(
    new ApiError(null, {
      message: "Should be admin",
    })
  );
}

exports.authMiddleware = authMiddleware;
exports.adminAuthMiddleware = adminAuthMiddleware;
