import { HTTP_ERROR_MESSAGES, HTTP_METHODS, HTTP_VERSIONS } from "@core/http/http.constants";
import { HttpMethod, HttpVersion } from "@core/http/http.constants";

export const validateHeaderSection = (headerSection: string): void => {
    if (!headerSection) {
        throw new Error(HTTP_ERROR_MESSAGES.HEADER_MISSING);
    }
};

export const validateHttpRequestLine = (method: string, uri: string, version: string, partsLength: number): void => {
    if (partsLength !== 3) {
        throw new Error(HTTP_ERROR_MESSAGES.INVALID_REQUEST_LINE_FORMAT);
    }
    if (!HTTP_METHODS.includes(method as HttpMethod)) {
        throw new Error(HTTP_ERROR_MESSAGES.INVALID_METHOD);
    }
    if (!HTTP_VERSIONS.includes(version as HttpVersion)) {
        throw new Error(HTTP_ERROR_MESSAGES.INVALID_VERSION);
    }
};

export const validateHttpRequestHeaders = (headerLines: string[]): void => {
    for (const line of headerLines) {
        const separatorIndex = line.indexOf(":");
        if (separatorIndex === -1) {
            throw new Error(`${HTTP_ERROR_MESSAGES.INVALID_HEADER_FORMAT}${line}`);
        }

        const key = line.substring(0, separatorIndex).trim().toLowerCase();
        const value = line.substring(separatorIndex + 1).trim();

        if (!key || !value) {
            throw new Error(`${HTTP_ERROR_MESSAGES.EMPTY_HEADER_KEY_OR_VALUE}${line}`);
        }
    }
};