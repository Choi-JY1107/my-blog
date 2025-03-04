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