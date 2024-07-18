import { db } from "../config/database";

const TBL_NAME = "tbl_category";

type Category = {
    id: number,
    category_name: string,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    
    created_by: number,
    updated_by: number,
    deleted_by: number
};

type CategoryField = {
    category_name: string
};

/**
 * Inserts new category to database
 * @param data - data to be inserted
 */
export async function insert(data: CategoryField) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}

/**
 * 
 * @param opt 
 * @returns Returns the list of user where the opt matches
 */
export async function select(opt: Partial<Category>) {
    const result = await db(TBL_NAME).select().where(opt);
    return result;
}

export async function updateById(id: string, data: Partial<Category>) {
    const result =await db<Category>(TBL_NAME).update(data).where("id", id);
    return result;
}