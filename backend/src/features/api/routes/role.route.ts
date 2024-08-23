import { Router } from "express";

import asyncHandler from "../../../middlewares/asynchandler";
import * as RoleController from "../controllers/role.controller";

const  router = Router();

router.get("/", asyncHandler(RoleController.getRoles));

router.post("/", asyncHandler(RoleController.createRole));

router.put("/:id", asyncHandler(RoleController.updateRole));

router.delete("/:id", asyncHandler(RoleController.deleteRole));

export default router;