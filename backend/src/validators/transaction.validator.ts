import Validator from "validatorjs";
import { Transaction } from "../models/transaction.model";



export const addTransactionRules = {
    amount: "required|numeric",
    description: "required",
    category_id: "required",
    transaction_type: "required",
};

export async function validateTransaction(data: Transaction) {
    const validation = new Validator(data, addTransactionRules);

    if (validation.fails())
        return validation.errors.all();

    return null;
}