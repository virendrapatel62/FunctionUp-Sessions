const { json } = require("express");
const express = require("express");
const { userApis } = require("./controllers/user-controller");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request.url);
  console.log(request.query);
  response.json({
    message: "Api is working..",
  });
});

userApis(app);

app.listen(PORT, () => {
  console.log(`Server is ready on ${PORT}`);
});
