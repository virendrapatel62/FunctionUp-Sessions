exports.productAuthMiddlware = (request, response, next) => {
  console.log("productAuthMiddlware");
  next();
};
