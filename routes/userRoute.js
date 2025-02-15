const express = require( "express");
const {
    signup,
    login,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require( "../controllers/userController");
const { authenticateToken } = require( "../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");

const userRouter = express.Router();

userRouter.post("/auth/signup", signup);
userRouter.post("/auth/login", login);

userRouter.post("/users", authenticateToken, createUser);
userRouter.get("/users", authenticateToken, getAllUsers);
userRouter.get("/users/:id", authenticateToken, getUserById);
userRouter.put("/users/:id", authenticateToken, updateUser);
userRouter.delete("/users/:id", authenticateToken, authorize('admin'), deleteUser);

module.exports = userRouter;
