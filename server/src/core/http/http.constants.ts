// Http Line 관련 상수
export const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"] as const;
export const HTTP_VERSIONS = ["HTTP/1.0", "HTTP/1.1", "HTTP/2", "HTTP/3"] as const;

// Http를 union 타입으로 변환한다.
export type HttpMethod = (typeof HTTP_METHODS)[number];
export type HttpVersion = (typeof HTTP_VERSIONS)[number];

// Http 줄 바꿈 상수
export const HTTP_CRLF = "\r\n";

// Http 관련 에러 메세지
export const HTTP_ERROR_MESSAGES = {
    HEADER_MISSING: "HTTP 헤더가 존재하지 않습니다.",
    INVALID_METHOD: "지원되지 않는 HTTP 메서드입니다.",
    INVALID_VERSION: "지원되지 않는 HTTP 버전입니다.",
    INVALID_REQUEST_LINE_FORMAT: "잘못된 HTTP 요청 라인 형식입니다.",
    INVALID_HEADER_FORMAT: "잘못된 HTTP 헤더 형식입니다: ",
    EMPTY_HEADER_KEY_OR_VALUE: "HTTP 헤더의 키 또는 값이 비어 있습니다: "
};

// Http 관련 구분자 상수
export const HTTP_SEPARATOR = {
    SPACE: " ",
    QUERY: "?",
    PARAMETER: "&",
    KEY_VALUE: "=",
    HEADER: ":"
};

// HTTP 상태 코드 (enum 활용)
export enum STATUS_CODE {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    FOUND = 302,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503
}

// HTTP 상태 메시지 (Map 활용)
export const STATUS_MESSAGE = new Map<number, string>([
    [STATUS_CODE.OK, "OK"],
    [STATUS_CODE.CREATED, "Created"],
    [STATUS_CODE.ACCEPTED, "Accepted"],
    [STATUS_CODE.NO_CONTENT, "No Content"],
    [STATUS_CODE.FOUND, "Found"],
    [STATUS_CODE.BAD_REQUEST, "Bad Request"],
    [STATUS_CODE.UNAUTHORIZED, "Unauthorized"],
    [STATUS_CODE.FORBIDDEN, "Forbidden"],
    [STATUS_CODE.NOT_FOUND, "Not Found"],
    [STATUS_CODE.INTERNAL_SERVER_ERROR, "Internal Server Error"],
    [STATUS_CODE.BAD_GATEWAY, "Bad Gateway"],
    [STATUS_CODE.SERVICE_UNAVAILABLE, "Service Unavailable"]
]);

// 기본 HTTP 상태 코드
export const DEFAULT_STATUS_CODE = STATUS_CODE.NOT_FOUND;

// 기본 HTTP 응답 헤더 (string 타입으로 통일)
export const DEFAULT_RESPONSE_HEADER: Readonly<Record<string, string>> = Object.freeze({
    "Content-Type": "application/json"
});

export const DEFAULT_MIME_TYPE = "application/octet-stream";
export const NOT_FOUND_MESSAGE = "404 Not Found";