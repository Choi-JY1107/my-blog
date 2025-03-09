import { HttpRequest } from "@core/http/httpRequest.model";
import { HTTP_CRLF } from "@core/http/http.constants";
import { validateHeaderSection } from "@core/http/http.validator";

export const parseHttpRequest = (requestBuffer: Buffer): HttpRequest => {
    const requestString = requestBuffer.toString();
    const [headerSection, bodySection] = requestString.split(`${HTTP_CRLF}${HTTP_CRLF}`);
    validateHeaderSection(headerSection);

    return new HttpRequest(headerSection, bodySection);
};