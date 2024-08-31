import { Request, Response, NextFunction } from "express";
import { JWT_SECRET_KEY } from "../config/constants";
import { verifyToken } from "../utils/jwt.util";
import { ErrorResponse } from "./errorhandler";


export default async function authentication(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.header("Authorization");

        if (!token) 
            return next(new ErrorResponse(401, "Unauthorized: No token provided."));

        if (token.split(" ")[0] !== "Bearer")
            return next(new ErrorResponse(401, "Unauthorized: Invalid token"));

        const decoded = await verifyToken(token.split(" ")[1], JWT_SECRET_KEY);

        res.locals.userId = (<any>decoded).user_id;

        return next();
    } catch (error) {
        console.log(error);
        return next(new ErrorResponse(401, "Unauthorized: Invalid token"));
    }
}