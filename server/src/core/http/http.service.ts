import { HttpRequest } from "@core/http/httpRequest.model";
import { DEFAULT_MIME_TYPE, HTTP_CRLF, NOT_FOUND_MESSAGE, STATUS_CODE } from "@core/http/http.constants";
import { validateHeaderSection } from "@core/http/http.validator";
import { HttpResponse } from "@core/http/httpResponse.model";
import { MIME_TYPE_LIST } from "@application/main.contant";
import { Socket } from "net";

const getResponseBody = (body: Buffer | string | Record<string, any>) => {
    if (typeof body === 'object' && !Buffer.isBuffer(body)) {
        return JSON.stringify(body);
    }
    return body;
}

export const parseHttpRequest = (requestBuffer: Buffer): HttpRequest => {
    const requestString = requestBuffer.toString();
    const [headerSection, bodySection] = requestString.split(`${HTTP_CRLF}${HTTP_CRLF}`);
    validateHeaderSection(headerSection);

    return new HttpRequest(headerSection, bodySection);
};

export const make404HttpResponse = (): HttpResponse => {
    return new HttpResponse(
        STATUS_CODE.NOT_FOUND,
        { "Content-Type": "text/plain" },
        NOT_FOUND_MESSAGE
    );
};

export const makeHttpResponse = (ext: string, fileData: Buffer | null): HttpResponse => {
    if (!fileData) return make404HttpResponse();

    const contentType = MIME_TYPE_LIST[ext] || DEFAULT_MIME_TYPE;

    return new HttpResponse(
        STATUS_CODE.OK,
        { "Content-Type": contentType },
        fileData
    );
};

export const sendHttpResponse = (socket: Socket, httpResponse: HttpResponse) => {
    const httpResponseBody = getResponseBody(httpResponse.body);

    socket.write(`HTTP/1.1 ${httpResponse.statusCode} ${httpResponse.statusMessage}${HTTP_CRLF}`);
    Object.entries(httpResponse.headers).forEach(([key, value]) => {
        socket.write(`${key}: ${value}${HTTP_CRLF}`);
    });
    socket.write(HTTP_CRLF);
    socket.write(httpResponseBody);

    socket.end();
}