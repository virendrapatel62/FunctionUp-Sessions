const { productAuthMiddlware } = require("./product-middleware");
const { userAuthMiddlware } = require("./user-middleware");

module.exports = {
  productAuthMiddlware,
  userAuthMiddlware,
};
