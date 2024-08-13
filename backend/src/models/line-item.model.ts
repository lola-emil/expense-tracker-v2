import { db } from "../config/database";


export const TBL_NAME = "tbl_line_item";

export type LineItem = {
    id: number,
    amount: number,
    description: string,
    quantity: number,
    transaction_date: Date,
    product_code: string,

    expense_id: number, // owner id ni siya

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: number,
    updated_by: number,
    deleted_by: number
};

export type LineItemField = Omit<LineItem, "created_at" |
    "updated_at" |
    "deleted_at" |
    "created_by" |
    "updated_by" |
    "deleted_by">;

export async function insert(data: LineItemField) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}

export async function select(opt: Partial<LineItem>) {
    const result = await db<LineItem>(TBL_NAME).select().where(opt);
    return result;
}

export async function updateById(id: number, data: Partial<LineItem>) {
    const result = await db<LineItem>(TBL_NAME).update(data).where("id", id);
    return result;
}