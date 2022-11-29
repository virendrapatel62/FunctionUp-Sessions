const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/authentication-demo")
  .then(() => console.log("DB Connected.."));
