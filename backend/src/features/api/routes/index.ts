import { Router } from "express";

import authentication from "../../../middlewares/authentication";

import authRouter from "./auth.route";
import userRouter from "./user.route";
import roleRouter from "./role.route";
import categoryRouter from "./category.route";
import transactionRouter from "./transaction.route";
import remarkRouter from "./remark.route";
import documentRouter from "./document.route";

const router = Router();


router.use("/auth", authRouter);

router.use(authentication);

router.use("/users", userRouter);
router.use("/roles", roleRouter)
router.use("/categories", categoryRouter);
router.use("/transactions", transactionRouter);
router.use("/remarks", remarkRouter);
router.use("/media", documentRouter);

export default router;