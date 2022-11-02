const express = require("express");
const app = express();

app.get("/users", (request, response, next) => {
  response.append("name", "virendra");
  response.append("header-value", "customhead");

  response.append("content-type", "text/json");

  if (!request.query.name)
    return next(new Error("Please give the name in query"));

  response.json({ message: "user" });
});

app.use((error, req, res, next) => {
  console.log({ error });
  res.json({
    message: "something went wring",
    error: error.message,
  });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
