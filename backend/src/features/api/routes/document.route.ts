import { Router } from "express";
import * as DocumentController from "../controllers/document.controller"
import asyncHandler from "../../../middlewares/asynchandler";

import fileUpload from "express-fileupload";

const router = Router();

router.use(fileUpload());

router.get("/:id", asyncHandler(DocumentController.get));

router.post("/", asyncHandler(DocumentController.save));

export default router;