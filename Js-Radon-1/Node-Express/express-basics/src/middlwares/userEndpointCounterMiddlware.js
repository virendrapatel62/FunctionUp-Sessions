let count = 0;
exports.userEndpointCount = (request, response, next) => {
  console.log("Counter middleware");
  count++;
  request.userApiCount = count;
  next();
};
