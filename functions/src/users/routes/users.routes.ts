import express from "express";
import { getUserById } from "../controllers/getUserById.controller";
import { getUsers } from "../controllers/getUsers.controller";
import { createUser } from "../controllers/createUser.controller";
import { updateUserById } from "../controllers/updateUserById.controller";
import { deleteUserById } from "../controllers/deleteUserById.controller";

const userRouter = express.Router();

userRouter.get("/user/:id", getUserById);
userRouter.get("/users", getUsers);
userRouter.post("/user", createUser);
userRouter.patch("/user/:id", updateUserById);
userRouter.delete("/user/:id", deleteUserById);

export default userRouter;
