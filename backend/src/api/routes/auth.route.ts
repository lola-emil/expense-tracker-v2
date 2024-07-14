import { Router } from "express";
import asyncHandler from "../../middlewares/asynchandler";

import * as AuthController from "../controllers/auth.controller";
import * as UserValidator from "../../validators/user.validator";

const router = Router();


router.post("/signin", asyncHandler(AuthController.signIn));
router.post("/update-password", asyncHandler(AuthController.updateUserPassword));

export default router;