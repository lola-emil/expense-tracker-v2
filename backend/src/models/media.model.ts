import { db } from "../config/database";

const TBL_NAME = "tbl_media";
type Media = {
    id: number,
    filename: string,
    extname: string,
    uri: string

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: number,
    updated_by: number,
    deleted_by: number
};

type MediaField = Omit<Media, "created_at" |
    "updated_at" |
    "deleted_at" |
    "created_by" |
    "updated_by" |
    "deleted_by">;

/**
 * Inserts new media to database
 * @param data - data to be inserted
 */
export async function insert(data: MediaField) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}

/**
 * 
 * @param opt 
 * @returns Returns the list of user where the opt matches
 */
export async function select(opt: Partial<Media>) {
    const result = await db(TBL_NAME).select().where(opt);
    return result;
}
