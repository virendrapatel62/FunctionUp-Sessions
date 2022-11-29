const { json } = require("express");
const express = require("express");
const app = express();
const { userRouter } = require("./controllers/user-controller");
const {
  userEndpointCount,
} = require("./middlwares/userEndpointCounterMiddlware");
const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request.url);
  console.log(request.query);
  response.json({
    message: "Api is working..",
  });
});

app.use("/api/users", userEndpointCount, userRouter);

app.listen(PORT, () => {
  console.log(`Server is ready on ${PORT}`);
});
