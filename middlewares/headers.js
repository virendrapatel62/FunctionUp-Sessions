const express = require("express");
const app = express();

// body
// headers
// query string
// path params

// setting headers here
app.get("/users", (request, response, next) => {
  response.append("name", "virendra");
  response.append("header-value", "customhead");
  response.append("content-type", "text/json");
  response.append("newHeader", "token session");
  if (!request.query.name)
    return next(new Error("Please give the name in query"));

  response.json({ message: request.headers });
});

// error handler
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
