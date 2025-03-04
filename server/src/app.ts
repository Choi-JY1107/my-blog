import { createServer, Socket } from "net";
import { HttpRequest } from "@http/httpRequest.model";
import { parseHttpRequest } from "@http/http.service";

const server = createServer((socket: Socket) => {
    socket.on("data", (requestBuffer: Buffer) => {
        const httpRequest: HttpRequest | null = parseHttpRequest(requestBuffer);

        console.log(httpRequest);
    });
});

server.listen(8080, () => {
    console.log("서버가 8080 포트에서 실행 중...");
});