const courseRouter = require("express").Router();
const { ApiError } = require("../../lib/ApiError");

courseRouter.get("/", (request, response, next) => {
  const { url } = request;

  if (request.query.orderBy != "title") {
    response.status(500);
    next(
      new ApiError(" Invalid Query", {
        message: "Invalid Query",
        allowed: ["title"],
      })
    );
    return;
  }

  response.json({
    url,
    courses: ["Angular"],
    date: new Date().toLocaleDateString(),
  });
});

courseRouter.post("/", (request, response) => {
  const { url, method } = request;
  response.json({
    url,
    method,
    courses: ["Angular"],
    date: new Date().toLocaleDateString(),
  });
});

module.exports = courseRouter;
