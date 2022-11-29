const userRouter = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");

// /api/users
userRouter.get("", getAllUsers);
userRouter.get("/:id", getOneUser);
userRouter.post("", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

exports.userRouter = userRouter;
