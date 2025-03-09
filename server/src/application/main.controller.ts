import { HttpRequest } from "@core/http/httpRequest.model";
import { Socket } from "net";
import { extname } from "path";
import { findFilePath, readFile } from "@util/file.util";

export const handleGlobalException = (socket: Socket, error: Error | unknown): void => {
    console.log(error);
};

export const getStaticFile = async (socket: Socket, httpRequest: HttpRequest): Promise<void> => {
    const uri = httpRequest.requestLine.uri;
    const ext = extname(uri);

    const filePath = await findFilePath(uri, ext);
    const fileData = await readFile(filePath);

    console.log(fileData);
}