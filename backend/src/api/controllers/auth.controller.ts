import { Request, Response } from "express";
import bcrypt from "bcrypt";

import * as UserModel from "../../models/user.model";
import { signToken } from "../../utils/jwt.util";
import { JWT_SECRET_KEY } from "../../config/constants";
import * as UserValidator from "../../validators/user.validator";
    import { ErrorResponse } from "../../middlewares/errorhandler";


/**
 * Sign in controller
 * @param req 
 * @param res 
 */
export async function signIn(req: Request, res: Response) {
    const user = req.body as UserModel.User;

    const errors = await UserValidator.validateSignIn(user);

    if (errors)
        throw new ErrorResponse(422, "", errors);

    const matchedUser = await UserModel.select({ email: user.email });

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

    const errors = await UserValidator.validateUpdatePassword(userId, body);

    if (errors)
        throw new ErrorResponse(422, "", errors);

    body.new_password = await bcrypt.hash(body.new_password, 10);

    // Update password from database
    await UserModel.updateById(userId, { password: body.new_password });

    return res.status(200).json({ message: "Update password successful." });
}
