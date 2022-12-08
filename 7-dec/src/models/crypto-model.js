const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  priceUsd: String,
  symbol: String,
  name: String,
  marketCapUsd: String,
});

const Crypto = mongoose.model("Crypto", schema);

module.exports = {
  Crypto,
};
