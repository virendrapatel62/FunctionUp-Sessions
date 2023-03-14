const courseRouter = require("express").Router();

courseRouter.get("/courses", (request, response) => {
  const { url } = request;
  response.json({
    url,
    courses: ["Angular"],
    date: new Date().toLocaleDateString(),
  });
});

courseRouter.post("/courses", (request, response) => {
  const { url, method } = request;
  response.json({
    url,
    method,
    courses: ["Angular"],
    date: new Date().toLocaleDateString(),
  });
});

module.exports = courseRouter;
