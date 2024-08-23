import { Request, Response } from "express";
import * as CategoryValidator from "../../../validators/category.validator";
import * as CategoryModel from "../../../models/category.model";
import { ErrorResponse } from "../../../middlewares/errorhandler";


/**
 * Respond with list of categories 
 * @param req 
 * @param res 
 */
export async function getCategories(req: Request, res: Response) {
    const query = req.query;
    const result = await CategoryModel.select(query);

    return res.status(200).json(result);
}

/**
 * Insert new category
 * @param req 
 * @param res 
 */
export async function insertCategory(req: Request, res: Response) {
    const body = req.body;
    const userId = res.locals.userId;

    const errors = await CategoryValidator.validateCategory(body);

    if (errors)
        throw new ErrorResponse(422, "", errors);

    body.created_by = userId;

    // Insert new category to database
    await CategoryModel.insert(body);

    return res.status(200).json({ message: "Category added successfully" });
}

/**
 * Updates category by id
 * @param req 
 * @param res 
 */
export async function updateCategory(req: Request, res: Response) {
    const body = req.body;
    const userId = res.locals.userId;
    const categoryId = req.params.id;

    const errors = await CategoryValidator.validateCategory(body);

    if (errors)
        throw new ErrorResponse(422, "", errors);

    body.created_by = userId;
    body.updated_at = new Date();

    await CategoryModel.updateById(categoryId, body);
}

/**
 * Delete category by id
 * @param req 
 * @param res 
 */
export async function deleteCategory(req: Request, res: Response) {
    const userId = res.locals.userId;
    const categoryId = req.params.id;

    await CategoryModel.updateById(categoryId, {
        deleted_at: new Date(),
        deleted_by: userId
    });

    return res.status(200).json({ message: "Deleted successfully" });
}