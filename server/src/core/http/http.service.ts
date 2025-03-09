import { HttpRequest } from "@http/httpRequest.model";
import { HTTP_CRLF } from "@http/http.constants";
import { validateHeaderSection } from "@http/http.validator";

export const parseHttpRequest = (requestBuffer: Buffer): HttpRequest => {
    const requestString = requestBuffer.toString();
    const [headerSection, bodySection] = requestString.split(`${HTTP_CRLF}${HTTP_CRLF}`);
    validateHeaderSection(headerSection);

    return new HttpRequest(headerSection, bodySection);
};