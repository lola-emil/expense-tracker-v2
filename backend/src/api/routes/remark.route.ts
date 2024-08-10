import { Router } from "express";
import asyncHandler from "../../middlewares/asynchandler";
import * as RemarkController from "../controllers/remark.controller";

const router = Router();


router.get("/", asyncHandler(RemarkController.getRemarks));
router.post("/", asyncHandler(RemarkController.insertRemark));
router.put("/:id", asyncHandler(RemarkController.updateRemark));
router.delete("/:id", asyncHandler(RemarkController.deleteRemark));

export default router;