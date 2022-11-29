const jwt = require("jsonwebtoken");
//TODO: move this to env
const JWT_SECRET = "anysecretkey";
exports.getUserToken = (payload = {}) => {
  return jwt.sign(payload, JWT_SECRET);
};

const validateUserToken = (token = "") => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

exports.isAdmin = (token) => {
  const payload = validateUserToken(token);
  if (payload && payload.type == "ADMIN") {
    return {
      payload,
    };
  }
  return false;
};

exports.validateUserToken = validateUserToken;
