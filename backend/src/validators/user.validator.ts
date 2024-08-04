import Validator from "validatorjs";
import { User } from "../models/user.model";
import * as UserModel from "../models/user.model";

import bcrypt from "bcrypt";



export const signInRules = {
    email: "required",
    password: "required"
};

export const updatePasswordRules = {
    current_password: "required",
    new_password: "required",
};

export const addUserRules = {
    firstname: "required",
    lastname: "required",
    email: "required|email",
    password: "required",
    role_id: "required"
};

export const updateUserRules = {
    firstname: "required",
    lastname: "required",
    email: "required|email",
    role_id: "required"
};


export async function validateSignIn(data: User) {
    const validation = new Validator(data, signInRules);

    if (validation.fails())
        return validation.errors.all();

    const matchedUser = await UserModel.select({ email: data.email });

    if (matchedUser.length < 1)
        return { email: ["Incorrect email."] };

    if (!(await bcrypt.compare(data.password, matchedUser[0].password)))
        return { password: ["Incorrect password."] };

    return null;
}

export async function validateUpdatePassword(id: number, data: {
    current_password: string, new_password: string;
}) {
    const validation = new Validator(data, updatePasswordRules);

    if (validation.fails())
        return validation.errors.all();

    const matchedUser = await UserModel.select({ id });

    if (!(await bcrypt.compare(data.current_password, matchedUser[0].password)))
        return { current_password: ["Incorrect password"] };

    return null;
}