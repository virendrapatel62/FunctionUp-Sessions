const getAllUsers = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const getOneUser = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const createUser = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const updateUser = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const deleteUser = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
