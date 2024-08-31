import { Router } from "express";

import authentication from "../../../middlewares/authentication";

import authRouter from "./auth.route";
import userRouter from "./user.route";
import roleRouter from "./role.route";
import categoryRouter from "./category.route";
import transactionRouter from "./transaction.route";
import remarkRouter from "./remark.route";
import mediaRouter from "./media.route";

const router = Router();


router.use("/auth", authRouter);
router.use("/users", authentication, userRouter);
router.use("/roles", authentication, roleRouter)
router.use("/categories", authentication, categoryRouter);
router.use("/transactions", authentication, transactionRouter);
router.use("/remarks", authentication, remarkRouter);
router.use("/media", authentication, mediaRouter);

export default router;