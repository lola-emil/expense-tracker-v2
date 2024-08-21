import { storageBucket } from "../config/google-storage";


export default async function uploadToBucket(file: any): Promise<{ success: boolean, message: string, imageUri: string }> {
    return new Promise((resolve, reject) => {
        
        const blob = storageBucket.file(file.name);

        const blobStream = blob.createWriteStream({
            resumable: false
        });

        blobStream.on("finish", () => {
            resolve({ 
                success: true, 
                message: "Upload successful.",
                imageUri: `https://storage.googleapis.com/lanzz-bucket/${blob.name}`
            });
        });

        blobStream.on("error", err => {
            reject(err);
        });

        blobStream.end(file.data);
    });
}