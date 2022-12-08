const express = require("express");
const mongoose = require("mongoose");
const { getAssets } = require("./data");
const { cryptoRouter } = require("./routers/crypto");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/crpto", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Mongoose Connected"))
  .catch((err) => console.log(err));

app.use("/crypto", cryptoRouter);

app.listen(3000, () => {
  console.log("server running on", 3000);
});
getAssets().then(console.log);
