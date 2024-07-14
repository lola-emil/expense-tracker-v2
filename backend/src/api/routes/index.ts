import { Router } from "express";

import authorization from "../../middlewares/authorization";

import authRouter from "./auth.route";
import userRouter from "./user.route";
import roleRouter from "./role.route";

const router = Router();


router.use("/auth", authRouter);
router.use("/users", authorization, userRouter);
router.use("/roles", authorization, roleRouter)

export default router;