const express = require("express");
const app = express();

// logUrl => que => getHandler => ...

const userReader = (request, _, next) => {
  const user = {
    fullName:
      `${request.query.name} ${request.query.lastname}` || "not avaiable",
    age: request.query.age,
  };

  request.user = user;
  next();
};

const queryLogger = (request, response, next) => {
  console.log("Query", request.query);
  console.log("insidequery logger", request.user);
  next();
};

const urlLogger = (request, response, next) => {
  console.log(request.url);
  next();
};

app.use(userReader);
app.use(queryLogger);
app.use(urlLogger);

const getHandler = (request, response, next) => {
  response.json({
    message: "Success full",
    url: request.url,
  });
};

app.get("/", getHandler);

app.get("/users", (request, response) => {
  response.json({
    message: "Success full",
    url: request.url,
    user: request.user,
  });
});

app.get("/students", (request, response) => {
  response.json({
    url: request.url,
  });
});

app.listen(3000, () => {
  console.log("Succes..");
});
