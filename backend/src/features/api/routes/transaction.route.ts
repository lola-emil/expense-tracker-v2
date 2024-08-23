import { Router } from "express";
import asyncHandler from "../../../middlewares/asynchandler";
import * as TransactionController from "../controllers/transaction.controller";

const router = Router();

router.get("/", asyncHandler(TransactionController.getTransactions));

router.post("/", asyncHandler(TransactionController.insertTransaction));

router.put("/:id", asyncHandler(TransactionController.updateTransaction));

router.delete("/:id", asyncHandler(TransactionController.deleteTransaction));

export default router;