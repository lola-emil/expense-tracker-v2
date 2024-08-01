import { db } from "../config/database";

const TBL_NAME = "tbl_user";

export type User = {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    role_id: string,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: string,
    updated_by: string,
    deleted_by: string
};


/**
 * Inserts new user to database
 * @param data - data to be inserted
 */
export async function insert(data: Partial<User>) {
    const result = await db<User>(TBL_NAME).insert(data);
    return result;
}

/**
 * 
 * @param opt 
 * @returns Returns the list of user where the opt matches
 */
export async function select(opt: Partial<User>) {
    const result = await db<User>(TBL_NAME).select().where(opt);
    return result;
}

/**
 * Updates user by id
 * @param id id of row to be updated
 * @param data data to be replaced
 */
export async function updateById(id: number, data: Partial<User>) {
    const result = await db<User>(TBL_NAME).update(data).where("id", id);
    return result;
}