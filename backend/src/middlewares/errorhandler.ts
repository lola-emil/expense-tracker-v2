import { Request, Response, NextFunction } from "express";


export class ErrorResponse extends Error {
    status: number;
    data: any;
    // errorId: string;

    constructor(status: number, message?: string, data?: any) {
        super();

        this.status = status;

        if (this.status >= 500)
            this.message = "Internal Server Error: " + this.message;

        this.message = String(message ?? "");
        this.data = data;
    }
}

export default function errorHandler(error: Error, req: Request, res: Response, _next: NextFunction) {

    if (error instanceof ErrorResponse) {
        const status = (<ErrorResponse>error).status;
        const message = (<ErrorResponse>error).message;
        const data = (<ErrorResponse>error).data;
        return res.status(status).json({
            status,
            message,
            data
        });
    } else {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error: " + error.message
        })
    }
}