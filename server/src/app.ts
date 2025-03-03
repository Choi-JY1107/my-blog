import {createServer, Socket} from 'net';

const server = createServer((socket: Socket)=> {
    socket.on('data', (data: Buffer) => {
        const request = data.toString();
        console.log(request)
    })
});

server.listen(8080, () => {
    console.log("안녕하세요");
})