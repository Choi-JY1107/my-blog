export const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"] as const;
export const HTTP_VERSIONS = ["HTTP/1.0", "HTTP/1.1", "HTTP/2", "HTTP/3"] as const;

export type HttpMethod = (typeof HTTP_METHODS)[number];
export type HttpVersion = (typeof HTTP_VERSIONS)[number];