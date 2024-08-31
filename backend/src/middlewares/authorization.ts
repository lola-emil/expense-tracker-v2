import { NextFunction, Request, Response } from "express";


export default async function authorization(req: Request, res: Response, next: NextFunction) {
    
    return next();
}