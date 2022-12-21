const express = require("express");

const app = express();

app.all("/ping", (request, response) => {
  response.json("Pong");
});

app.post("api/user/register", () => {
  //: TODO
  // register users
});

app.post("api/user/login", () => {
  //: TODO
  // login users
  //  return token
});

const UserAuthMiddleware = (_, __, next) => {
  // check the token
  //   read user id from token payload
  //   get this user form Db
  // request.user = user
  // varify it
  // if varified
  next();
};

app.post("api/students", UserAuthMiddleware, (_, __, next) => {
  //: TODO
  // create users
  //   get user from request
  //   const body = {
  //     studentName,
  //     subject,
  //     marks,
  //     user,
  //   };
  //  return token

  //   CASE 2:

  // find for the stude and subec : find({student : '' ,sub : '' , user : user })
  // student.marks = student.marks + marks
  //   studend.ssave();
  next();
});

app.get("/api/students", UserAuthMiddleware, (req, response) => {
  //: TODO
  //   get user from request
  M.find({
    user: user,
    name: {
      $regex: /he/,
    },
  });
  //  return token
  response.json({ url: req.url, query: req.query });
});

app.get("/api/students/:id", UserAuthMiddleware, (req, response) => {
  //: TODO
  //   get user from request
  M.findOne({
    user: user,
    id: id,
  });
  //  return token
  response.json({ url: req.url, query: req.query });
});

app.get("/api/students", UserAuthMiddleware, (req, response) => {
  //: TODO
  //   get user from request
  M.find({
    user: user,
    name: {
      $regex: /he/,
    },
  });
  //  return token
  response.json({ url: req.url, query: req.query });
});

app.put("/api/students/:id", UserAuthMiddleware, (req, response) => {
  //: TODO
  //   get user from request
  M.find({
    id: id,
    $set: {
      ...req.body,
    },
  });
  //  return token
  response.json({ url: req.url, query: req.query });
});

app.delete("/api/students/:id", UserAuthMiddleware, (req, response) => {
  //: TODO
  //   get user from request
  M.delete({
    id: id,
  });
  //  return token
  response.json({ url: req.url, query: req.query });
});

app.listen(3000, () => {
  console.log("App is running");
});

// 1 Virnedra
// 2 JIOhn

// 2 Maths 75
// 2 Hindi 75
// 1 Hindi 75
// 1 Maths 75
