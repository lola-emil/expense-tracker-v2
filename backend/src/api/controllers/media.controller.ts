import { Request, Response } from "express";
import * as MediaModel from "../../models/media.model";
import uploadToBucket from "../../utils/upload-to-bucket.util";


/**
 * Get media by id
 * @param req 
 * @param res 
 * @returns 
 */
export async function getMedia(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const media = await MediaModel.select({ id });


    return res.status(200).json(media[0]);
}

/**
 * Should upload the uploaded media to google cloud bucket
 * @param req 
 * @param res 
 * @returns 
 */
export async function addMedia(req: Request, res: Response) {
    const body = req.body;
    const userId = res.locals.userId;

    const file = req.files!.image as any;
    const upload = await uploadToBucket(file);

    body.filename = file.name;
    body.uri = upload.imageUri;
    body.mimetype = file.mimetype;
    body.created_by = userId;


    await MediaModel.insert(body);

    res.status(200).json({ message:  upload.message });
}