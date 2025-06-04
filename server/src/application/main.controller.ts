import { HttpRequest } from "@core/http/httpRequest.model";
import { Socket } from "net";
import { extname } from "path";
import { findFilePath, readFile } from "@util/file.util";
import { makeHttpResponse, sendHttpResponse } from "@core/http/http.service";

export const handleGlobalException = (
  socket: Socket,
  error: Error | unknown
): void => {
  console.log(error);
};

export const getStaticFile = async (
  socket: Socket,
  httpRequest: HttpRequest
): Promise<void> => {
  let uri = httpRequest.requestLine.uri;
  if (uri === "/") uri = "/home/index.html";
  const ext = extname(uri);

  console.log("uri:", uri);
  console.log("ext:", ext);
  const filePath = await findFilePath(uri, ext);
  const fileData = await readFile(filePath);

  const httpResponse = makeHttpResponse(ext, fileData);
  sendHttpResponse(socket, httpResponse);
};
