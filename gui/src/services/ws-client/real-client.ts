import {
  IService,
  IWebSocketHandler,
  IWSClient,
  ProtocolType,
} from "../entities";
import {
  IncomingWSEvent,
  IncomingWSEventname,
  OutgoingWSEvent,
  OutgoingWSEventname,
} from "../entities";
import { connectToWebSocket } from "./web-socket";

interface IDependencies {
  /** No dependence */
}

export default class RealWSClient
  implements IWSClient, IService<IDependencies> {
  readonly hostName: string;
  readonly protocol: ProtocolType;
  readonly prefixString: string | null;
  readonly websocketConnectionPromise: Promise<SocketIOClient.Socket>;

  constructor(hostName: string, protocol: ProtocolType, prefix: string | null) {
    this.hostName = hostName;
    this.protocol = protocol;
    this.prefixString = prefix;
    this.websocketConnectionPromise = connectToWebSocket(
      this.hostName,
      this.protocol,
      this.prefixString,
      () => {}
    );
    this._initWebsocketApiClient();
  }

  inject(services: IDependencies) {
    /** */
  }

  sendEvent<T extends OutgoingWSEvent>(body: T) {
    this.send(body.event_name, body);
  }

  private readonly _wsHandlers = new Map<
    IncomingWSEventname,
    IWebSocketHandler[]
  >();

  subscribe<T extends IncomingWSEvent>(
    eventName: T["event_name"],
    cb: IWebSocketHandler<T>
  ) {
    if (!this._wsHandlers.has(eventName)) {
      this._wsHandlers.set(eventName, []);
    }
    this._wsHandlers.get(eventName)!.push(cb);
  }

  unsubscribe<T extends IncomingWSEvent>(
    eventName: T["event_name"],
    cb: IWebSocketHandler<T>
  ) {
    if (!this._wsHandlers.has(eventName)) {
      return;
    }
    this._wsHandlers.set(
      eventName,
      this._wsHandlers.get(eventName)!.filter((x) => x !== cb)
    );
  }

  private send<T>(eventName: OutgoingWSEventname, data: T) {
    this._sendMessage(eventName, data);
  }

  private async _sendMessage<BodyT>(type: string, body: BodyT) {
    const wsc = await this.websocketConnectionPromise;
    wsc.send(JSON.stringify({ type, body }));
  }

  private async _initWebsocketApiClient() {
    const wsconn = await this.websocketConnectionPromise;
    if (!wsconn) {
      return;
    }

    wsconn.on("message", (data: string) => {
      const message: {
        type: IncomingWSEventname;
        body: IncomingWSEvent;
      } = JSON.parse(data);
      console.log(`Got incomming WS message with type: ${message.type}.`);
      console.log(message);

      const callbacksForMessage = this._wsHandlers?.get(message.type) || [];
      if (callbacksForMessage.length === 0) {
        console.warn(
          "There is no callback to intercept websocket message " + message.type
        );
      }

      callbacksForMessage.forEach((cb) => cb(message.body));
    });
  }
}
