const { users } = require("../user");
const { userValidator } = require("../middlwares/useParamValidator");

exports.userApis = (app) => {
  app.get("/api/users", (request, response) => {
    const result = {
      users,
    };
    response.json(result);
  });

  app.get("/api/user/:id", userValidator, (request, response) => {
    console.log("I am at handler");

    response.json({
      user: request.user,
    });
  });

  // app.get("/api/user/2", (request, response) => {
  //   response.json({
  //     user: users[1],
  //   });
  // });

  app.post("/api/user", (request, response) => {
    console.log(request.body);
    const newUser = {
      id: Date.now(),
      ...request.body,
    };
    users.push(newUser);
    response.status(201).json(newUser);
  });

  app.put("/api/user/:id", (request, response) => {
    //   user.name = name;
    //   user.id = id;
    Object.assign(request.user, request.body);
    response.json({ user });
  });

  app.delete("/api/user/:id", (request, response) => {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({
        message: "id is required or id is not valid",
      });
    }

    const index = users.findIndex((user) => user.id === +id);
    if (index < 0) {
      return response.status(404).json({
        message: "user not found",
      });
    }

    users.splice(index, 1);
    response.status(204).send();
  });

  // app.get("/api/users", (request, response) => {
  //   const count = users.length;
  //   const limit = +request.query.limit || 2;
  //   const page = +request.query.page || 1;
  //   const startIndex = 0 + limit * (page - 1);
  //   const endIndex = 2 + limit * (page - 1);
  //   const result = {
  //     count,
  //     page,
  //     limit,
  //     users: users.slice(startIndex, endIndex),
  //   };
  //   response.json(result);
  // });
};
