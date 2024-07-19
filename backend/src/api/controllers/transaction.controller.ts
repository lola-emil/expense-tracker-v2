import { Request, Response } from "express";
import * as TransactionModel from "../../models/transaction.model";
import Validator from "validatorjs";
import * as TransactionValidator from "../../validators/transaction.validator";
import { ErrorResponse } from "../../middlewares/errorhandler";


/**
 * Respond with list of transactions 
 * @param req 
 * @param res 
 */
export async function getTransactions(req: Request, res: Response) {
    const query = req.query;
    const result = await TransactionModel.select(query);

    return res.status(200).json(result);
}


/**
 * Inserts new transaction to database
 * @param req 
 * @param res 
 */
export async function insertTransaction(req: Request, res: Response) {
    const body = req.body;
    const userId = res.locals.userId;

    const validator = new Validator(body, TransactionValidator.addTransactionRules);
    if (validator.fails())
        throw new ErrorResponse(422, "", validator.errors.all());

    body.created_by = userId;
    body.created_at = new Date();

    await TransactionModel.insert(body);

    return res.status(200).json({ message: "ADded successfully" });
}

/**
 * Update transaction by id
 * @param req 
 * @param res 
 */
export async function updateTransaction(req: Request, res: Response) {
    const body = req.body;
    const id = parseInt(req.params.id);
    const userId = res.locals.userId;

    const validator = new Validator(body, TransactionValidator.addTransactionRules);
    if (validator.fails())
        throw new ErrorResponse(422, "", validator.errors.all());

    body.updated_by = userId;
    body.updated_at = new Date();

    await TransactionModel.updateById(id, body);

    return res.status(200).json({ message: "Updated successfully" });
}

/**
 * Delete transaction by id
 * @param req 
 * @param res 
 */
export async function deleteTransaction(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const userId = res.locals.userId;

    await TransactionModel.updateById(id, {
        deleted_at: new Date(),
        deleted_by: userId
    });
}