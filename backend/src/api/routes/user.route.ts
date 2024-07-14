import { Request, Response, Router } from "express";
import * as UserValidator from "../../validators/user.validator";
import asyncHandler from "../../middlewares/asynchandler";
import * as UserController from "../controllers/user.controller";
import authorization from "../../middlewares/authorization";

const router = Router();

router.get("/", asyncHandler(UserController.getUsers));

router.post("/", asyncHandler(UserController.insertUser));

router.put("/:id", asyncHandler(UserController.updateUser));

router.delete("/:id", asyncHandler(UserController.deleteUser));

export default router;
