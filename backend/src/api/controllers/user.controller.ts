import { Request, Response } from "express";
import bcrypt from "bcrypt";
import * as UserModel from "../../models/user.model";
import { createUserValidator, updateUserValidator } from "../../validators/user.validator";
import { ValidationErrorResponse } from "../../middlewares/errorhandler";


/**
 * Respond users list by selected query
 * @param req 
 * @param res 
 */
export async function getUsers(req: Request, res: Response) {
    const query = req.query;
    const users = await UserModel.select(query);

    return res.status(200).json(users);
}

/**
 * Insert new user 
 * @param req 
 * @param res 
 */
export async function insertUser(req: Request, res: Response) {
    const body = req.body as UserModel.User;
    const userId = res.locals.userId;

    // validate new user
    const errors = createUserValidator(body);
    if (errors.length > 0) 
        throw new ValidationErrorResponse(422, errors);

    const matchedUser = await UserModel.select({ email: body.email });
    // Check if email is already taken
    if (matchedUser.length > 0) 
        throw new ValidationErrorResponse(422, [{ path: "email", message: "Email already taken" }]);

    // Encrypt password
    body.password = await bcrypt.hash(body.password, 10);
    body.created_by = userId;

    // Save new user
    await UserModel.insert(body);

    return res.status(200).json({ message: "User added successfully." });
}

/**
 * Updates user by id 
 * @param req 
 * @param res 
 */
export async function updateUser(req: Request, res: Response) {
    const body = req.body as UserModel.User;
    const id = parseInt(req.params.id);

    // validate user update
    const errors = updateUserValidator(body);
    if (errors.length > 0) 
        throw new ValidationErrorResponse(422, errors);

    // Update the 'updated_at' timestamp
    body.updated_at = new Date();
    body.updated_by = res.locals.userId;

    // update user
    await UserModel.updateById(id, body);

    return res.status(200).json({ message: "Updated successfully." })
}

/**
 * Delete user by id 
 * @param req 
 * @param res 
 */
export async function deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    // Soft deletion of user
    await UserModel.updateById(id, { deleted_at: new Date() });

    return res.status(200).json({ message: "Deleted successfully" });
}