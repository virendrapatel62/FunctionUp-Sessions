const studentRouter = require("./routers/student");
const courseRouter = require("./routers/course");

const { createUser, getUsers, getUserByEmail } = require("../data/user");
const { registerMiddlewares } = require("../middlewares");
const {
  errorHandlerMiddleware,
} = require("../middlewares/errorHandlerMiddleware");
const { authMiddleware } = require("../middlewares/authMiddlewares");
const { ApiError } = require("../lib/ApiError");
const { sign } = require("jsonwebtoken");

const app = require("express")();

registerMiddlewares(app);

app.use("/students", authMiddleware, studentRouter);
app.use("/courses", authMiddleware, courseRouter);

app.post("/accounts/register", (request, response) => {
  const user = request.body;
  createUser(user).then(() => {
    response.json({
      message: "user created",
    });
  });
});
app.post("/accounts/login", (request, response, next) => {
  const { email, password } = request.body;
  getUserByEmail(email)
    .then((user) => {
      response.json({
        message: "Login Sucess",
        token: sign(
          {
            email: user.email,
          },
          process.env.JWT_SECRET
        ),
      });
    })
    .catch((err) => {
      response.status(404);
      return next(
        new ApiError("", {
          message: "invalid email paswordd",
        })
      );
    });
});

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

app.use(errorHandlerMiddleware);
