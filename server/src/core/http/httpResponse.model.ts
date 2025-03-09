import { STATUS_CODE, STATUS_MESSAGE } from "@core/http/http.constants";

export class HttpResponse {
    readonly statusCode: STATUS_CODE;
    readonly statusMessage: string; // ✅ statusMessage 유지
    readonly headers: Readonly<Record<string, string>>;
    readonly body: Buffer | string | Record<string, any>;

    constructor(
        statusCode: STATUS_CODE,
        headers: Record<string, string> = {},
        body: Buffer | string | Record<string, any> = ""
    ) {
        this.statusCode = statusCode;
        this.statusMessage = STATUS_MESSAGE.get(statusCode) || "Unknown Status"; // ✅ 자동 설정
        this.headers = Object.freeze(headers);
        this.body = body;
    }

    toJson(): string {
        return JSON.stringify(this.body);
    }

    toString(): string {
        return typeof this.body === "string" ? this.body : this.toJson();
    }

    toBuffer(): Buffer {
        return Buffer.isBuffer(this.body) ? this.body : Buffer.from(this.toString());
    }
}