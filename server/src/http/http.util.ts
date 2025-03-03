import { HttpRequest, HttpRequestLine, HttpRequestHeader, HttpRequestQuery, HttpRequestBody } from "@http/httpRequest.model";
import { HttpMethod, HttpVersion, HTTP_METHODS, HTTP_VERSIONS } from "@http/http.constants";

export const parseQueryString = (queryString: string): Record<string, string> => {
    if (!queryString) return {};
    return queryString
        .substring(1) // '?' 제거
        .split("&")
        .reduce((acc, pair) => {
            const [key, value] = pair.split("=");
            acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
            return acc;
        }, {} as Record<string, string>);
}

export const parseJson = (body: string): Record<string, any> | null => {
    try {
        return JSON.parse(body);
    } catch {
        return null;
    }
}

export const getHeader = (headers: Record<string, string>, key: string): string | undefined => {
    return headers[key.toLowerCase()];
}

export const setHeader = (headers: Record<string, string>, key: string, value: string): Record<string, string> => {
    return Object.freeze({ ...headers, [key.toLowerCase()]: value });
}

export const parseHttpRequest = (requestString: string): HttpRequest | null => {
    const lines = requestString.split("\r\n");

    if (lines.length < 1) return null;

    // 요청 라인 파싱
    const [method, fullUri, version] = lines[0].split(" ");
    if (!HTTP_METHODS.includes(method as HttpMethod)) return null;
    if (!HTTP_VERSIONS.includes(version as HttpVersion)) return null;

    // URI & 쿼리 스트링 분리
    const [uri, queryString] = fullUri.split("?");

    // 헤더 파싱
    const headers: Record<string, string> = {};
    let bodyIndex = lines.findIndex(line => line === ""); // 헤더와 바디를 구분하는 빈 줄 찾기
    for (let i = 1; i < bodyIndex; i++) {
        const [key, value] = lines[i].split(": ");
        if (key && value) {
            headers[key.toLowerCase()] = value;
        }
    }

    // 본문 파싱
    const body = bodyIndex !== -1 ? lines.slice(bodyIndex + 1).join("\n") : "";

    return new HttpRequest(
        new HttpRequestLine(method as HttpMethod, uri, version as HttpVersion),
        new HttpRequestHeader(headers),
        new HttpRequestQuery(queryString ? `?${queryString}` : ""),
        new HttpRequestBody(body)
    );
};