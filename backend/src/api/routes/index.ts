import { Router } from "express";

import authorization from "../../middlewares/authorization";

import authRouter from "./auth.route";
import userRouter from "./user.route";
import roleRouter from "./role.route";
import categoryRouter from "./category.route";
import transactionRouter from "./transaction.route";

const router = Router();


router.use("/auth", authRouter);
router.use("/users", authorization, userRouter);
router.use("/roles", authorization, roleRouter)
router.use("/categories", authorization, categoryRouter);
router.use("/transactions", authorization, transactionRouter);

export default router;