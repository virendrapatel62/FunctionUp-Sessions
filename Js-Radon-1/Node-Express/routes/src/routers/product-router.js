const productRouter = require("express").Router();

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

productRouter.post("", (request, response) => {
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
