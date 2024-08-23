import { Request, Response } from "express";
import * as RemarkModel from "../../../models/remarks.model";


export async function getRemarks(req: Request, res: Response) {
    const remarks = await RemarkModel.select(req.query);

    return res.json(remarks);
}

export async function insertRemark(req: Request, res: Response) {
    const userId = res.locals.userId;
    const body = req.body;

    body.created_by = userId;

    await RemarkModel.insert(body);


    return res.status(200).json({
        message: "Added successfully"
    });
}


export async function updateRemark(req: Request, res: Response) {
    const userId = res.locals.userId;

    const remarkId = req.params.id;
    const body = req.body;

    body.updated_at = new Date();
    body.updated_by = userId;

    await RemarkModel.updateById(parseInt(remarkId), body);

    return res.status(200).json({ message: "Updated successfully" });
}

export async function deleteRemark(req: Request, res: Response) {
    const userId = res.locals.userId;

    const remarkId = req.params.id;

    await RemarkModel.updateById(parseInt(remarkId), {
        deleted_at: new Date(),
        deleted_by: userId
    });

    return res.status(200).json({ message: "Deleted successfully " });
}