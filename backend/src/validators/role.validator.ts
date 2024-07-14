import { Role } from "../models/role.model";
import { isEmpty, ValidatorError } from "../utils/validation.util";



export function roleValidator(role: Partial<Role>) {
    const { name } = role;
    const errors: ValidatorError<Role>[] = [];

    if (isEmpty(name)) errors.push({ path: "name", message: "Name should not be empty." });

    return errors;
}