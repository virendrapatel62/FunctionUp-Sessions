const express = require("express");
require("./db");
const routers = require("./routers");
const {
  productAuthMiddlware,
  userAuthMiddlware,
  requestLogger,
} = require("./middlewares");
const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/api/users", userAuthMiddlware, routers.userRouter);
app.use("/api/products", productAuthMiddlware, routers.productRouter);
app.use("/api/auth", routers.authRouter);

app.listen(3000, () => {
  console.log("Done...");
});

console.log(process.env.JWT_SECRET);
