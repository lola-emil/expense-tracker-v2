import { User } from "../models/user.model";
import validator = require("validator");

import { ValidatorError, isEmail, isEmpty } from "../utils/validation.util";

/**
 * Validates login credential
 * @param body
 * @returns Returns errors from validation
 */
export function loginValidator(body: Partial<User>) {
    const { email, password } = body as User;
    let errors: ValidatorError<User>[] = [];

    // Check if field is empty
    if (isEmpty(email)) errors.push({ path: "email", message: "Email should not be empty." });
    if (isEmpty(password)) errors.push({ path: "password", message: "Password should not be empty" });

    return errors;
}

/**
 * Validates new user info
 * @param body 
 * @returns Returns errors from validation
 */
export function createUserValidator(body: Partial<User>) {
    const {
        firstname,
        lastname,
        email,
        password,
        role_id
    } = body as User;
    let errors: ValidatorError<User>[] = [];

    // Check if field is empty
    if (isEmpty(firstname)) errors.push({ path: "firstname", message: "Firstname should not be empty." });
    if (isEmpty(lastname)) errors.push({ path: "lastname", message: "Lastname should not be empty." });
    if (isEmpty(email)) errors.push({ path: "email", message: "Email should not be empty." });
    if (isEmpty(password)) errors.push({ path: "password", message: "Password should not be empty." });
    if (isEmpty(role_id)) errors.push({ path: "role_id", message: "Role should not be empty."});

    // Check if email is valid
    if (!isEmail(email) && !isEmpty(email)) errors.push({ path: "email", message: "Email is invalid." });

    // Validate ang password
    if (!isEmpty(password) && password.length < 8) errors.push({ path: "password", message: "Password must be at least 8 characters." })
    if (!isEmpty(password) && !validator.isAlphanumeric(password)) errors.push({ path: "password", message: "Password must include letters and numbers. " })

    return errors;
}

export function updateUserValidator(body: Partial<User>) {
    const {
        firstname,
        lastname,
        email,
    } = body as User;
    let errors: ValidatorError<User>[] = [];

    // Check if field is empty
    if (isEmpty(firstname)) errors.push({ path: "firstname", message: "Firstname should not be empty." });
    if (isEmpty(lastname)) errors.push({ path: "lastname", message: "Lastname should not be empty." });
    if (isEmpty(email)) errors.push({ path: "email", message: "Email should not be empty." });

    if (!validator.isEmail(email ?? "") && !isEmpty(email)) errors.push({ path: "email", message: "Email is invalid." });

    return errors;
}


type PasswordUpdateField = {
    current_password: string,
    password_confirmation: string,
    new_password: string
};

/**
 * Validates user's password update
 * @param body 
 * @returns Returns errors from validation
 */
export function updatePasswordValidator(body: Partial<PasswordUpdateField>) {
    const {
        current_password,
        new_password,
        password_confirmation,
    } = body;
    const errors: ValidatorError<PasswordUpdateField>[] = [];

    if (isEmpty(current_password)) errors.push({ path: "current_password", message: "" });
    if (isEmpty(new_password)) errors.push({ path: "current_password", message: "" });

    if (new_password != password_confirmation) errors.push({ path: "new_password", message: "Password doesn't match" });

    return errors;
}