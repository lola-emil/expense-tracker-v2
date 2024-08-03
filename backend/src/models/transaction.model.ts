import { db } from "../config/database";

const TBL_NAME = "tbl_transaction";

type Transaction = {
    id: number,
    amount: number,
    description: string,
    category_id: number,
    transaction_type: "income" | "expense",
    status: "approved" | "rejected" | "pending"

    approval_date: Date,
    rejected_date: Date,

    remarks_id: number,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: number,
    updated_by: number,
    deleted_by: number
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