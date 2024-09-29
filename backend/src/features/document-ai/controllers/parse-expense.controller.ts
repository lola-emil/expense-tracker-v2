import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { DocumentProcessorServiceClient } from "@google-cloud/documentai";
import { PROCESSOR_ID, PROJECT_ID, PROJECT_LOCATION } from "../../../config/constants";
import { ErrorResponse } from "../../../middlewares/errorhandler";


export async function parseExpense(req: Request, res: Response) {
    const image = req.files!.image as UploadedFile;
    const supportedTypes = ["application/pdf", "image/gif", "image/tiff", "image/jpeg", "image/png", "image/bmp", "image/webp", "text/html"];

    const name = `projects/${PROJECT_ID}/locations/${PROJECT_LOCATION}/processors/${PROCESSOR_ID}`;
    const encodedImage = Buffer.from(image.data).toString("base64");



    // Check if file is valid
    if (!supportedTypes.includes(image.mimetype))
        throw new ErrorResponse(422, "", {
            image: ["File type not supported"]
        });

    if (image.size > 2e+7)
        throw new ErrorResponse(422, "", {
            image: ["Maximum file size is 20MB"]
        });

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