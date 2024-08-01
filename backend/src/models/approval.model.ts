import { db } from "../config/database";


const TBL_NAME = "tbl_approval";

type Approval = {
    id: string,
    approver_id: string,
    status: "approved" | "rejected",
    comment: string,

    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

    created_by: string,
    updated_by: string,
    deleted_by: string
};

type ApprovalField = Omit<Approval, "created_at" |
    "updated_at" |
    "deleted_at" |
    "created_by" |
    "updated_by" |
    "deleted_by">;

/**
 * Inserts new media to database
 * @param data - data to be inserted
 */
export async function insert(data: ApprovalField) {
    const result = await db(TBL_NAME).insert(data);
    return result;
}

/**
 * 
 * @param opt 
 * @returns Returns the list of user where the opt matches
 */
export async function select(opt: Partial<Approval>) {
    const result = await db(TBL_NAME).select().where(opt);
    return result;
}
