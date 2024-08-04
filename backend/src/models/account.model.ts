import { db } from "../config/database";


const TBL_NAME = "tbl_account";
export type Account = {
    id: number,
    acc_name: string,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: number,
    updated_by: number,
    deleted_by: number,
};

export type AccountFields = Omit<Account, "created_at" |
"updated_at" |
"deleted_at" |
"created_by" |
"updated_by" |
"deleted_by">;


/**
 * Inserts new account to database
 * @param data 
 * @returns 
 */
export async function insert(data: Account) {
    const res = await db<Account>(TBL_NAME).insert(data);
    return res;
}

/**
 * Retrieves accounts from database
 * @param opt 
 * @returns 
 */
export async function select(opt: Partial<Account>) {
    const res = await db<Account>(TBL_NAME).select(opt);
    return res;
}

/**
 * Updates account by id
 * @param id 
 * @param data 
 * @returns 
 */
export async function updateById(id: number, data: Partial<Account>) {
    const res = await db<Account>(TBL_NAME).update(data).where("id", id);
    return res;
}