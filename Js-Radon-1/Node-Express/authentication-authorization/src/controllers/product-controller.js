const getAllProducts = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const getOneProduct = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const createProduct = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const updateProduct = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

const deleteProduct = (request, response) => {
  response.json({
    url: request.originalUrl,
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
