import { Request, Response, NextFunction } from "express";
import { ValidatorError } from "../utils/validation.util";


export class ErrorResponse extends Error {
    status: number;
    data: any;
    // errorId: string;

    constructor(status: number, message?: string) {
        super();

        this.status = status;

        if (this.status >= 500)
            this.message = "Internal Server Error: " + this.message;

        this.message = String(message);
    }
}

export class ValidationErrorResponse<T> extends Error {
    status: number;
    fields: ValidatorError<T>[];

    constructor(status: number, fields: ValidatorError<T>[]) {
        super();

        this.status = status;
        this.fields = fields;
    }
}

export default function errorHandler(error: Error, req: Request, res: Response, _next: NextFunction) {

    if (error instanceof ErrorResponse) {
        const status = (<ErrorResponse>error).status;
        const message = (<ErrorResponse>error).message;
        return res.status(status).json({
            status,
            message
        });
    } else if (error instanceof ValidationErrorResponse) {
        const status = error.status;
        const fields = error.fields;
        return res.status(status).json({
            status,
            fields
        });
    } else {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error: " + error.message
        })
    }
}