import { Storage } from "@google-cloud/storage";
import path from "path";
import { PROJECT_ID, SERVICE_KEY } from "./constants";

const storage = new Storage({
    keyFilename: path.join(__dirname, SERVICE_KEY),
    projectId: PROJECT_ID
});

export const storageBucket = storage.bucket('lanzz-bucket');