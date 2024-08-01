import { db } from "../config/database";

const TBL_NAME = "tbl_transaction";

type Transaction = {
    id: string,
    amount: number,
    description: string,
    category_id: string,
    transaction_type: "income" | "expense",
    approval_id: string,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: string,
    updated_by: string,
    deleted_by: string
};

type TransactionField = Omit<Transaction, "created_at" |
    "updated_at" |
    "deleted_at" |
    "created_by" |
    "updated_by" |
    "deleted_by">;


/**
 * Inserts new transaction to database
 * @param data - data to be inserted
 */
export async function insert(data: TransactionField) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}

/**
 * 
 * @param opt 
 * @returns Returns the list of user where the opt matches
 */
export async function select(opt: Partial<Transaction>) {
    const result = await db(TBL_NAME).select().where(opt);
    return result;
}


/**
 * Update transaction by id 
 * @param id 
 * @param data 
 */
export async function updateById(id: number, data: Partial<Transaction>) {
    const result = await db<Transaction>(TBL_NAME).update(data).where("id", id);
    return result;
}