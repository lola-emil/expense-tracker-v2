import { Router } from "express";
import { parseExpense } from "../controllers/parse-expense.controller";
import asyncHandler from "../../../middlewares/asynchandler";
import authorization from "../../../middlewares/authorization";
import fileUpload from "express-fileupload";
import { categorize } from "../controllers/categorization.controller";


const router = Router();

router.use(authorization);
router.use(fileUpload());

// Parse expense
router.post("/expense-parser", asyncHandler(parseExpense));

router.post("/categoriziation", asyncHandler(categorize))


export default router;