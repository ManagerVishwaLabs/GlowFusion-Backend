import { Router } from "express";

import authRoutes from "../services/auth/";
import userRoutes from "../services/user/";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export default router;
