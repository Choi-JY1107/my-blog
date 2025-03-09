import { HTTP_CRLF, HTTP_SEPARATOR, HttpMethod, HttpVersion } from "@core/http/http.constants";
import { validateHttpRequestLine, validateHttpRequestHeaders } from "@core/http/http.validator";

export class HttpRequestLine {
    readonly method: HttpMethod;
    readonly uri: string;
    readonly version: HttpVersion;

    constructor(requestLine: string) {
        const parts = requestLine.split(HTTP_SEPARATOR.SPACE);
        validateHttpRequestLine(parts[0], parts[1], parts[2], parts.length);

        this.method = parts[0] as HttpMethod;
        this.uri = parts[1];
        this.version = parts[2] as HttpVersion;
    }
}

export class HttpRequestHeader {
    readonly headers: Readonly<Record<string, string>>;

    constructor(headerLines: string[]) {
        validateHttpRequestHeaders(headerLines);

        const headers: Record<string, string> = {};
        for (const line of headerLines) {
            const separatorIndex = line.indexOf(HTTP_SEPARATOR.HEADER);
            const key = line.substring(0, separatorIndex).trim().toLowerCase();
            const value = line.substring(separatorIndex + 1).trim();
            headers[key] = value;
        }

        this.headers = Object.freeze(headers);
    }
}

export class HttpRequestQuery {
    readonly queryParams: Readonly<Record<string, string>>;

    constructor(queryString: string) {
        this.queryParams = Object.freeze(this.parseQueryString(queryString));
    }

    private parseQueryString(queryString: string): Record<string, string> {
        if (!queryString) return {};

        const parsedParams: Record<string, string> = {};
        const paramPairs = queryString.split(HTTP_SEPARATOR.PARAMETER);

        for (const pair of paramPairs) {
            const [key, value] = pair.split(HTTP_SEPARATOR.KEY_VALUE);
            parsedParams[key] = value;
        }

        return parsedParams;
    }
}

export class HttpRequestBody {
    readonly body: string;

    constructor(body: string = "") {
        this.body = body;
    }
}

export class HttpRequest {
    readonly requestLine: HttpRequestLine;
    readonly headers: HttpRequestHeader;
    readonly query: HttpRequestQuery;
    readonly body: HttpRequestBody;

    constructor(headerSection: string, bodySection: string) {
        const lines = headerSection.split(HTTP_CRLF);

        this.requestLine = new HttpRequestLine(lines[0]);

        const headerLines = lines.slice(1);
        this.headers = new HttpRequestHeader(headerLines);

        const [uri, queryString] = this.requestLine.uri.split(HTTP_SEPARATOR.QUERY);
        this.query = new HttpRequestQuery(queryString ?? "");

        this.body = new HttpRequestBody(bodySection ?? "");
    }
}