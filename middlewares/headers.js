const express = require("express");
const app = express();

app.get("/users", (request, response) => {
  response.json({
    message: "Success full",
    url: request.url,
    user: request.user,
  });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
