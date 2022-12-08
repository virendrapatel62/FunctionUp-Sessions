const cryptoRouter = require("express").Router();
const { getAssets } = require("../data");
const { Crypto } = require("../models/crypto-model");

cryptoRouter.get("/", async (_, response) => {
  let data = await getAssets();

  const promises = data.map((c) => {
    return Crypto.findOneAndUpdate(
      { name: c.name },
      {
        $set: c,
      },
      {
        upsert: true,
        new: true,
      }
    );
  });

  Promise.all(promises).then((data) => {
    Crypto.deleteMany({
      _id: {
        $nin: data.map((i) => i._id),
      },
    }).then(console.log);
    response.json(data);
  });

  // data.forEach((c) => {
  //   Crypto.findOneAndUpdate(
  //     { name: c.name },
  //     {
  //       $set: c,
  //     },
  //     {
  //       upsert: true,
  //       new: true,
  //     }
  //   ).then((result) => {
  //     console.log("Updated", result.name);
  //   });
  // });
});

module.exports = {
  cryptoRouter,
};
