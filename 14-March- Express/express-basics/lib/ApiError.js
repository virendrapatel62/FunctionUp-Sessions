class ApiError extends Error {
  constructor(message, meta) {
    super(message);
    this.meta = meta;
  }
}

module.exports = { ApiError };
