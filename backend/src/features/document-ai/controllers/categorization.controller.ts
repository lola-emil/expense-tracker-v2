import { Request, Response } from "express";


export async function categorize(req: Request, res: Response) {
    return res.status(200).json({
        message: "Welcome to categorization"
    })
}