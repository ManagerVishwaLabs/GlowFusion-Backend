import { Router } from "express";

import UserProxy from "./user.proxy";

const userRouter = Router();

userRouter.post("/", UserProxy.createUser);

export default userRouter;
