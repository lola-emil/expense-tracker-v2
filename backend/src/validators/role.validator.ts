import Validator from "validatorjs";
import { Role } from "../models/role.model";
import * as RoleModel from "../models/role.model";

export const addRoleRules = {
    name: "required",
    description: "required"
};

export async function validateRole(data: Role) {
    const validation = new Validator(data, addRoleRules);

    if (validation.fails())
        return validation.errors.all();

    // Check if role name already exists
    const matchedRole = await RoleModel.select({ name: data.name });
    if (matchedRole.length > 0)
        return { name: ["Role name already exists."] };

    return null;
}