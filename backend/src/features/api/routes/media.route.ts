import { Router } from "express";
import * as MediaController from "../controllers/media.controller"
import asyncHandler from "../../../middlewares/asynchandler";

import fileUpload from "express-fileupload";

const router = Router();

router.use(fileUpload());

router.get("/:id", asyncHandler(MediaController.getMedia));

router.post("/", asyncHandler(MediaController.addMedia));

export default router;