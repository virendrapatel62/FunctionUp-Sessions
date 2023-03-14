console.log("Hello Express");
const studentRouter = require("./routers/student");
const courseRouter = require("./routers/course");

const app = require("express")();
const { json } = require("express");

app.use(json());

app.use("/students", studentRouter);

// app.use("/students", express.json(), studentRouter);
// app.use("/students", express.json(), courseRouter);

app.listen(3000, () => {
  console.log("Ready ☑️");
});

app.get(
  "/data-passing",

  (req, res, next) => {
    console.log(req.students);
    req.students = ["First"];
    next();
  },
  (req, res, next) => {
    console.log(req.students);
    req.students.push("2nd");
    next();
  },
  (req, res, next) => {
    console.log(req.students);
    req.students.push("3rd");
    next();
  },

  (request, response) => {
    console.log(request.students);
    response.json(request.students);
  }
);

app.get("/", (_, response) => {
  console.log(__dirname + "/index.html");

  response.sendFile(__dirname + "/index.html");
});

const multer = require("multer");
const upload = multer();
app.post("/create", upload.none(), (request, response) => {
  console.log(request.body.firstName);
  response.json("Message");
});
app.use("*", (request, response, next) => {
  response.json("Not -found , FRom LASTMIDDLEWARE");
});
