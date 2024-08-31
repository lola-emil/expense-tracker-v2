import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { DocumentProcessorServiceClient } from "@google-cloud/documentai";
import { PROCESSOR_ID, PROJECT_ID, PROJECT_LOCATION } from "../../../config/constants";


export async function parseExpense(req: Request, res: Response) {
    const image = req.files!.image as UploadedFile;

    /**
     * TODO: need validation for file's mimeType
     */

    const name = `projects/${PROJECT_ID}/locations/${PROJECT_LOCATION}/processors/${PROCESSOR_ID}`;
    const encodedImage = Buffer.from(image.data).toString("base64");

    const client = new DocumentProcessorServiceClient();

    const [result] = await client.processDocument({
        name,
        rawDocument: {
            content: encodedImage,
            mimeType: image.mimetype
        }
    });

    return res.status(200).json(result);
}