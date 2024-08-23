import { Router } from "express";

import authorization from "../../../middlewares/authorization";

import authRouter from "./auth.route";
import userRouter from "./user.route";
import roleRouter from "./role.route";
import categoryRouter from "./category.route";
import transactionRouter from "./transaction.route";
import remarkRouter from "./remark.route";
import mediaRouter from "./media.route";

const router = Router();


router.use("/auth", authRouter);
router.use("/users", authorization, userRouter);
router.use("/roles", authorization, roleRouter)
router.use("/categories", authorization, categoryRouter);
router.use("/transactions", authorization, transactionRouter);
router.use("/remarks", authorization, remarkRouter);
router.use("/media", authorization, mediaRouter);

export default router;