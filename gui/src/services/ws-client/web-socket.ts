import socketio from "socket.io-client";
import { ProtocolType } from "../entities";

type ConnectCallback = () => void;

export async function connectToWebSocket(
  hostName: string,
  protocol: ProtocolType,
  prefix: string | null,
  cb?: ConnectCallback
) {
  const prefixString = prefix ? `/${prefix}` : "";
  const WSURL = `${protocol}://${hostName}/${prefixString}`;
  const socket = socketio.connect(WSURL);

  return new Promise<SocketIOClient.Socket>((resolve) => {
    socket.on("connect", () => {
      console.log(`Connected to WebSocket at ${WSURL} ...`);
      if (cb) {
        cb();
      }
      resolve(socket);
    });
  });
}
