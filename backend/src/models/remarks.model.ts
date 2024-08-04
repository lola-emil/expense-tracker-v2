import { Result } from "express-validator";
import { db } from "../config/database";


const TBL_NAME = "tbl_remarks";
export type Remarks = {
    id: number,
    comment: string,
    transaction_id: number,
    
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: number,
    updated_by: number,
    deleted_by: number,
};

export type RemarksField = Omit<Remarks, "created_at" |
"updated_at" |
"deleted_at" |
"created_by" |
"updated_by" |
"deleted_by">;

/**
 * Inserts new remark to database
 * @param data - data to be inserted 
 */
export async function insert(data: RemarksField) {
    const res = await db<Remarks>(TBL_NAME).insert(data);
    return res;
}

/**
 * 
 * @param opt 
 * @returns - returns list of remarks
 */
export async function select(opt: Partial<Remarks>) {
    const res = await db<Remarks>(TBL_NAME).select(opt);
    return res;
}

/**
 * Updates remark by id
 * @param id 
 * @param data 
 * @returns 
 */
export async function updateById(id: number, data: Partial<Remarks>) {
    const res = await db<Remarks>(TBL_NAME).update(data).where("id", id);
    return res;
}