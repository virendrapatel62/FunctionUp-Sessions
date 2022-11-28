exports.userValidator = (request, response, next) => {
  const { id } = request.params;
  //   const { name, age } = request.body;
  if (!id) {
    return response.status(400).json({
      message: "id is required or id is not valid",
    });
  }

  const user = users.find((user) => user.id === +id);
  if (!user) {
    console.log("I Am returning from middlewrae");
    return response.status(404).json({
      message: "user not found",
    });
  }

  request.user = user;
  next();
};
