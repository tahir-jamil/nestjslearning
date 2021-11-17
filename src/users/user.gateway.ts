import { SubscribeMessage, MessageBody, WebSocketServer, WebSocketGateway } from "@nestjs/websockets";
import { from } from "rxjs/internal/observable/from";
import { map } from "rxjs/operators";

@WebSocketGateway()
export class UserChatGateway {

    @WebSocketServer()
    server;

    @SubscribeMessage('message')
    handleEvent(@MessageBody() data: string) {
        const response = [1, 2, 3];
        return from(response).pipe(
            map(data => (this.server.emit("message", data))),
        );
    }
}