const fs = require("fs/promises");
const path = require("path");

const getUsers = () => {
  return fs
    .readFile(path.join(__dirname, "../../user.json"))
    .then((response) => response.toString())
    .then((stringData) => JSON.parse(stringData));
};

const getUserByEmail = (email) => {
  return getUsers()
    .then((users) => {
      return users.find((u) => u.email === email);
    })
    .then((user) => {
      if (user) {
        return user;
      }

      throw Error("not found");
    });
};

const createUser = (user) => {
  return getUsers().then((users) => {
    users.push(user);
    return fs.writeFile(
      path.join(__dirname, "../../user.json"),
      JSON.stringify(users)
    );
  });
};

module.exports = {
  getUsers,
  createUser,
  getUserByEmail,
};
