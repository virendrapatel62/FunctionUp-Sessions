const { User } = require("../models/user-model");
const authRouter = require("express").Router();
const passwordHash = require("password-hash");
const { getUserToken } = require("../utils/jwt");

// /api/auth

authRouter.post("/login", async (request, response) => {
  const { email, password } = request.body;
  //TODO :  validation
  const user = await User.findOne({
    email: email,
  });
  if (user) {
    const hashedPassword = user.password;
    if (passwordHash.verify(password, hashedPassword)) {
      return response.json({
        message: "login success",
        accessToken: getUserToken({
          _id: user._id,
          type: user.userType,
        }),
      });
    }
  }

  return response.status(400).json({
    error: "email or password invalid",
  });
});

authRouter.post("/signup", (request, response) => {
  const { password } = request.body;

  new User({
    ...request.body,
    password: passwordHash.generate(password),
  })
    .save()
    .then((user) => {
      response.json({ user });
    })
    .catch((error) => {
      response.status(400).json({ error });
    });
});

exports.authRouter = authRouter;
