import { HttpMethod, HttpVersion } from "@http/http.constants";
import { parseQueryString } from "@http/http.util";

export class HttpRequestLine {
    readonly method: HttpMethod;
    readonly uri: string;
    readonly version: HttpVersion;

    constructor(method: HttpMethod, uri: string, version: HttpVersion) {
        this.method = method;
        this.uri = uri;
        this.version = version;
    }
}

export class HttpRequestHeader {
    readonly headers: Readonly<Record<string, string>>;

    constructor(headers: Record<string, string> = {}) {
        this.headers = Object.freeze(headers); // 불변 객체로 설정
    }
}

export class HttpRequestQuery {
    readonly queryParams: Readonly<Record<string, string>>;

    constructor(queryString: string) {
        this.queryParams = Object.freeze(parseQueryString(queryString)); // 불변 객체 적용
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

    constructor(
        requestLine: HttpRequestLine,
        headers: HttpRequestHeader,
        query: HttpRequestQuery,
        body: HttpRequestBody
    ) {
        this.requestLine = requestLine;
        this.headers = headers;
        this.query = query;
        this.body = body;
    }
}