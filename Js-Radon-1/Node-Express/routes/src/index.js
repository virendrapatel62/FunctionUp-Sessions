const express = require("express");
const { productRouter, userRouter } = require("./routers");
const { productAuthMiddlware, userAuthMiddlware } = require("./middlewares");
const app = express();

app.use("/api/users", userAuthMiddlware, userRouter);
app.use("/api/products", productAuthMiddlware, productRouter);

app.listen(3000, () => {
  console.log("Done...");
});
