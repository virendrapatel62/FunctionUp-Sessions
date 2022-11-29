const productRouter = require("express").Router();
const { adminAuthMiddleware } = require("../middlewares/user-middleware");

// /api/products
productRouter.get("", (request, response) => {
  response.json({
    url: request.originalUrl,
  });
});

productRouter.get("/:id", (request, response) => {
  response.json({
    url: request.originalUrl,
  });
});

productRouter.post("", adminAuthMiddleware, (request, response) => {
  console.log("INSIDE PRODUCTS CREATE");
  console.log(request.user);
  response.json({
    url: request.originalUrl,
  });
});

productRouter.put("/:id", (request, response) => {
  response.json({
    url: request.originalUrl,
  });
});

productRouter.delete("/:id", (request, response) => {
  response.json({
    url: request.originalUrl,
  });
});

exports.productRouter = productRouter;
