exports.userAuthMiddlware = (request, response, next) => {
  console.log("useAuthMiddlware");
  next();
};
