import { db } from "../config/database";


export const TBL_NAME = "tbl_income";

export type Income = {
    id: number,
    amount: number,
    account_id: number,

    description: string,

    transaction_id: string,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

};

export type IncomeField = Omit<Income, "created_at" |
    "updated_at" |
    "deleted_at" |
    "created_by" |
    "updated_by" |
    "deleted_by">

export async function insert(data: IncomeField) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}

export async function select(opt: Partial<Income>) {
    const result = await db<Income>(TBL_NAME).select().where(opt);
    return result;
}

export async function updateById(id: number, data: Partial<Income>) {
    const result = await db<Income>(TBL_NAME).update(data).where("id", id);
    return result;
}