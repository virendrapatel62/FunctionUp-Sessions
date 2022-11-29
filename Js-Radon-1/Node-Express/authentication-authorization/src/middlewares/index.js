const { productAuthMiddlware } = require("./product-middleware");
const { userAuthMiddlware } = require("./user-middleware");

const requestLogger = (request, _, next) => {
  console.log({
    url: request.url,
    params: request.params,
    query: request.query,
    body: request.body,
  });
  next();
};

module.exports = {
  productAuthMiddlware,
  userAuthMiddlware,
  requestLogger,
};
