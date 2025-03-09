import { createServer, Socket } from "net";
import { HttpRequest } from "@core/http/httpRequest.model";
import { parseHttpRequest } from "@core/http/http.service";
import { PORT } from "@application/main.contant"
import mainRouter from "./main.router";

const server = createServer((socket: Socket) => {
    socket.on("data", (requestBuffer: Buffer) => {
        const httpRequest: HttpRequest | null = parseHttpRequest(requestBuffer);

        console.log(httpRequest);
        mainRouter(socket, httpRequest);
    });
});

server.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 실행 중...`);
});