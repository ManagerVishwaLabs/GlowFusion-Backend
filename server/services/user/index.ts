import { Router } from "express";

import UserProxy from "./user.proxy";

const userRouter = Router();

userRouter.post("/createUser", UserProxy.createUser);

userRouter.get("/getUserById/:userId", UserProxy.getUserById);

userRouter.post("/getUsersByIds", UserProxy.getUsersByIds);

userRouter.get("/getUserByUsername/:username", UserProxy.getUserByUsername);

userRouter.get("/getUsersByCompany/:company", UserProxy.getUsersByCompany);

userRouter.patch("/updateUserById/:userId", UserProxy.updateUserById);

userRouter.patch("/updateUsersByIds", UserProxy.updateUsersByIds);

userRouter.patch("/updateUser", UserProxy.updateUser);

userRouter.patch("/updateUsers", UserProxy.updateUsers);

userRouter.delete("/deleteUserById/:userId", UserProxy.deleteUserById);

userRouter.delete("/deleteUsersByIds", UserProxy.deleteUsersByIds);

userRouter.delete("/deleteUser", UserProxy.deleteUser);

userRouter.delete("/deleteUsers", UserProxy.deleteUsers);

userRouter.delete(
  "/deleteUserByUsername/:username",
  UserProxy.deleteUserByUsername,
);

export default userRouter;
