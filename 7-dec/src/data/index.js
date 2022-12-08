const axios = require("axios");
const url = "http://api.coincap.io/v2/assets";
module.exports.getAssets = async () => {
  const response = await axios.get(url);
  return response.data.data
    .sort((c1, c2) => {
      const { changePercent24Hr: p } = c1;
      const { changePercent24Hr: p2 } = c2;
      return p - p2;
    })
    .map((c) => {
      const { priceUsd, symbol, name, marketCapUsd, changePercent24Hr } = c;
      return { priceUsd, symbol, name, marketCapUsd };
    });
};
