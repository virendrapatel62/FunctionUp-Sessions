const studentRouter = require("express").Router();
const express = require("express");
const crypto = require("crypto");
const students = [
  { id: 1, name: "Virendra" },
  { id: 2, name: "Sandeep" },
];

studentRouter.get("/", (request, response) => {
  const { url, method } = request;
  response.json({
    students,
  });
});
studentRouter.get("/:id", (request, response) => {
  const {
    url,
    method,
    params: { id },
  } = request;
  const index = students.findIndex((student) => student.id == id);
  if (index < 0) {
    return response.status(404).send();
  }
  response.json({
    student: students[index],
  });
});

studentRouter.post("/", (request, response) => {
  const {
    url,
    method,
    body: { name },
  } = request;

  if (!name) {
    response.status(400).json({
      message: "name is required!",
    });
    return;
  }

  const newStudent = { id: crypto.randomUUID(), name };
  students.push(newStudent);

  response.json({
    student: newStudent,
  });
});

studentRouter.put("/:id", (request, response) => {
  const {
    params: { id },
    body: { name },
  } = request;

  const index = students.findIndex((student) => student.id == id);

  if (index < 0) {
    return response.status(404).send();
  }

  students[index].name = name;

  response.json({
    students: students[index],
  });
});
studentRouter.patch("/", (request, response) => {
  const { url, method } = request;
  response.json({
    url,
    method,
    students: ["Virendra"],
    date: new Date().toLocaleDateString(),
  });
});

module.exports = studentRouter;
