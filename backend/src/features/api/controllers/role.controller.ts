import { Request, Response } from "express";
import * as RoleModel from "../../../models/role.model";
import * as RoleValidator from "../../../validators/role.validator";
import { ErrorResponse } from "../../../middlewares/errorhandler";


/**
 * Respond with list of roles
 * @param req 
 * @param res 
 */
export async function getRoles(req: Request, res: Response) {
    const query = req.query;
    const roles = await RoleModel.select(query);

    return res.status(200).json(roles);
}

/**
 * Insert new role 
 * @param req 
 * @param res 
 */
export async function createRole(req: Request, res: Response) {
    const body = req.body as RoleModel.Role;
    const userId = res.locals.userId;

    const errors = await RoleValidator.validateRole(body);

    if (errors)
        throw new ErrorResponse(422, "", errors);

    // Add user id who created this role
    body.created_by = userId;

    // Insert new role to database
    await RoleModel.insert(body);

    return res.status(200).json({ message: "Role added successfully" });
}

/**
 * Updates role by id
 * @param req 
 * @param res 
 */
export async function updateRole(req: Request, res: Response) {
    const roleId = parseInt(req.params.id);
    const body = req.body as RoleModel.Role;
    const userId = res.locals.userId;

    const errors = await RoleValidator.validateRole(body);
    if (errors)
        throw new ErrorResponse(422, "", errors);
    
    // Add user id who updated this role
    body.updated_by = userId
    body.updated_at = new Date();

    await RoleModel.updateById(roleId, body);

    return res.status(200).json({ message: "Role updated successfully" });
}

/**
 * Delete role by id
 * @param req 
 * @param res 
 */
export async function deleteRole(req: Request, res: Response) {
    const userId = res.locals.userId;
    const roleId = parseInt(req.params.id);

    await RoleModel.updateById(roleId, {
        deleted_at: new Date(),
        deleted_by: userId
    });

    return res.status(200).json({ message: "Deleted successfully." });
}