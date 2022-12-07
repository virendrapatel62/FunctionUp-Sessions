const express = require("express");
const multer = require("multer");

const app = express();
const json = express.text();

app.use(
  multer({
    dest: __dirname,
  }).any()
);

app.use(json);
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
  const { query, params, body, files, file } = request;
  console.log({
    query,
    body,
    params,
    file,
    files,
  });
  next();
});

app.get("/", (request, response) => {
  response.json({
    url: request.url,
  });
});

app.post("/", (request, response) => {
  response.json({
    url: request.url,
  });
});

app.post("/users", (request, response) => {
  response.json({
    url: request.url,
  });
});

app.get("/students", (request, response) => {
  response.json({
    url: request.url,
  });
});

app.get("/users", (request, response) => {
  response.json({
    url: request.url,
  });
});

app.listen(3000, () => {
  console.log("Done");
});
