import { Router } from "express";
import asyncHandler from "../../../middlewares/asynchandler";
import * as CategoryController from "../controllers/category.controller";


const router = Router();

router.post("/", asyncHandler(CategoryController.insertCategory));

router.get("/", asyncHandler(CategoryController.getCategories));

router.put("/:id", asyncHandler(CategoryController.updateCategory));

router.delete("/:id", asyncHandler(CategoryController.deleteCategory));

export default router;