import { db } from "../config/database"

export const TBL_NAME = "tbl_expense";

export type Expense = {
    id: number,
    description: string,
    vendor: string,
    tin_no: string,

    date_of_payment: Date,
    supporting_document_id: number, // foreign key for tbl_media
    receipt_date: Date,

    transaction_id: number,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    
    created_by: number,
    updated_by: number,
    deleted_by: number
};

export type ExpenseField = Omit<Expense, "created_at" |
    "updated_at" |
    "deleted_at" |
    "created_by" |
    "updated_by" |
    "deleted_by">;

/**
 * Insert new Expense
 * @param data 
 * @returns 
 */
export async function insert(data: ExpenseField) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}


/**
 * Retrieves list of expenses
 * @param opt 
 * @returns 
 */
export async function select(opt: Partial<Expense>) {
    const result = await db<Expense>(TBL_NAME).select().where(opt);
    return result;
}

/**
 * Update expense by id 
 * @param id 
 * @param data 
 * @returns 
 */
export async function updateById(id: number, data: Partial<Expense>) {
    const result = await db<Expense>(TBL_NAME).update(data).where("id", id);
    return result;
}