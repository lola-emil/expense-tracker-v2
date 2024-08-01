import { db } from "../config/database";

const TBL_NAME = "tbl_role";

export type Role = {
    id: string,
    name: string,
    description: string,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: string,
    updated_by: string,
    deleted_by: string
};

/**
 * Inserts new role to database
 * @param data - data to be inserted 
 */
export async function insert(data: Partial<Role>) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}

/**
 * 
 * @param opt 
 * @returns Returns the list of user where the opt matches
 */
export async function select(opt: Partial<Role>) {
    const result = await db(TBL_NAME).select().where(opt);
    return result;
}

/**
 * Update role by id
 * @param id 
 * @param data 
 */
export async function updateById(id: number, data: Partial<Role>) {
    const result = await db<Role>(TBL_NAME).update(data).where("id", id);
    return result;
}