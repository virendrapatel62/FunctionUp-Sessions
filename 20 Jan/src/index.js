const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Running..");
});

app.get("/", (request, response) => {
  console.log("Rquest on /");

  response.json({
    message: "Hello World..",
    method: request.method,
  });
});

app.post("/", (request, response) => {
  console.log("Rquest on / post");

  response.json({
    message: "Hello World..",
    method: request.method,
  });
});
app.put("/", (request, response) => {
  response.json({
    message: "Hello World..",
    method: request.method,
  });
});
app.post("/", (request, response) => {
  console.log("Rquest on / post");

  response.json({
    message: "Hello World..",
    method: request.method,
  });
});
app.patch("/", (request, response) => {
  console.log("Rquest on / post");

  response.json({
    message: "Hello World..",
    method: request.method,
  });
});

// app.all("/api/courses", (request, response) => {
//   console.log("All Rounder");
//   response.json({
//     message: request.url,
//     method: request.method,
//   });
// });

const courses = [
  { name: "React", id: 1 },
  { name: "Angular", id: 2 },
  { name: "Express", id: 3 },
  { name: "JS", id: 4 },
];

app.get("/api/courses", (request, response) => {
  response.json({
    data: courses,
    limit: request.query.limit,
    sortBy: request.query.sortBy,
  });
});

app.get("/api/courses/:id", (request, response, next) => {
  const course = courses.find((c) => c.id == request.params.id);
  if (!course) {
    response.status(404).json({
      error: `Course with ${request.params.id} not found`,
    });
  }
  response.json({
    course,
  });
});

app.post("/api/courses", (request, response) => {
  response.json({
    course: request.body,
  });
});

// app.get("/api/courses", (request, response) => {
//   console.log("All Rounder");
//   response.json(["Angular", "React"]);
// });

app.all("*", (request, response) => {
  response.status(404).json({
    error: "Not-Found from end",
  });
});
