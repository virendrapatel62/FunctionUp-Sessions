const { response } = require("express");
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Done..");
});
app.get("/api/students", (request, response) => {
  response.json({
    message: "/api/student is working..",
  });
});

app.get("/api/students/:id", (request, response) => {
  response.json({
    message: "api for single stiudent is working..",
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "NOT-FOUND",
  });
});
