import { MIME_FILE_PATH_LIST, NO_FILE_DATA_MESSAGE } from "@application/main.contant";
import fs from "fs"
import path from "path";

const validateFileData = (fileData: string | Buffer | null) => {
    if (!fileData) {
        throw new Error(NO_FILE_DATA_MESSAGE);
    }
}

export const findFilePath = async (uri: string, ext: string) => {
    const mimeFilePath = MIME_FILE_PATH_LIST[ext];
    return path.join(mimeFilePath, uri);
}

export const readFile = async (filePath: string): Promise<Buffer | null> => {
    const fileData = fs.readFileSync(filePath);
    validateFileData(fileData);

    return fileData;
}