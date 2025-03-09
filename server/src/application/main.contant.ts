import path from "path";

// 서버 배포 관련 상수
export const PORT = 8080

// router 관련 상수
export const STATIC_TYPE_LIST: readonly string[] = Object.freeze(['.css', '.js', '.ico', '.png', '.jpg', '.html']);
export const COMMENT_URL: string = "/comment"
export const NO_FILE_DATA_MESSAGE = "존재하지 않는 파일입니다."

const projectRoot = process.cwd();
const publicFolder = path.join(projectRoot, '/client/public');
const staticFolder = path.join(projectRoot, '/client/src');
const htmlFolder = path.join(projectRoot, '/client/src/pages');

export const MIME_FILE_PATH_LIST: Readonly<Record<string, string>> = Object.freeze({
    '.html': htmlFolder,
    '.css': staticFolder,
    '.js': staticFolder,
    '.ico': publicFolder,
    '.png': publicFolder,
    '.jpg': publicFolder,
});

export const MIME_TYPE_LIST: Record<string, string> = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".txt": "text/plain",
    ".pdf": "application/pdf"
};
