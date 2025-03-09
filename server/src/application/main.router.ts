import { HttpRequest } from "@core/http/httpRequest.model"
import { Socket } from "net"
import { extname } from "path"
import { getStaticFile, handleGlobalException } from "@application/main.controller";
import { COMMENT_URL, STATIC_TYPE_LIST } from "./main.contant";

const routeRequest = (httpRequest: HttpRequest) => {
    const uri = httpRequest.requestLine.uri;

    if (STATIC_TYPE_LIST.includes(extname(uri))) {
        return getStaticFile;
    }
    // if(uri.startsWith(COMMENT_URL)) {
    //     return commentRouter;
    // }

    // TODO 여기에 나중에 에러 처리
    return getStaticFile;
}

const mainRouter = async (socket: Socket, httpRequest: HttpRequest): Promise<void> => {
    try {
        const next = routeRequest(httpRequest);
        await next(socket, httpRequest)
    } catch (error) {
        handleGlobalException(socket, error);
    }
}

export default mainRouter