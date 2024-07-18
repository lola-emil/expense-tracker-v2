import { Request, Response } from "express";
import bcrypt from "bcrypt";

import * as UserModel from "../../models/user.model";
import { signToken } from "../../utils/jwt.util";
import { JWT_SECRET_KEY } from "../../config/constants";
import * as UserValidator from "../../validators/user.validator";
import Validator from "validatorjs";
import { ErrorResponse } from "../../middlewares/errorhandler";


/**
 * Sign in controller
 * @param req 
 * @param res 
 */
export async function signIn(req: Request, res: Response) {
    const user = req.body as UserModel.User;
    console.log(user);
    const validation = new Validator(user, UserValidator.signInRules);
    if (validation.fails())
        throw new ErrorResponse(422, "", validation.errors.all());

    // Get matched user by email
    const matchedUser = await UserModel.select({ email: user.email });

    // Compare passwords
    if (!(await bcrypt.compare(user.password, matchedUser[0].password)))
        return res.status(401).json({
            message: "Incorrect password.",
            path: "password",
        });

    // Sign token
    const token = await signToken({ user_id: matchedUser[0].id }, JWT_SECRET_KEY);
    return res.json({ token });
}

/**
 * Controller for updating user password 
 * @param req 
 * @param res 
 */
export async function updateUserPassword(req: Request, res: Response) {
    const userId = res.locals.userId;
    const body = req.body;

    const validation = new Validator(body, UserValidator.updatePasswordRules);
    if (validation.fails())
        throw new ErrorResponse(422, "", validation.errors.all());

    const matchedUser = await UserModel.select({ id: userId });

    // Check if current password is correct
    if (!(await bcrypt.compare(body.current_password, matchedUser[0].password)))
        return res.status(422).json({ path: "current_password", message: "Incorrect password." });

    body.new_password = await bcrypt.hash(body.new_password, 10);

    // Update password from database
    await UserModel.updateById(userId, { password: body.new_password });

    return res.status(200).json({ message: "Update password successful." });
}
