// eslint-disable-next-line
export interface IService<T> {
  inject(services: T): void;
}

export interface IHTTPClient {
  ping(): Promise<{} | null>;
  test(): Promise<string | null>;
}

export interface IWSClient {
  sendEvent<T extends OutgoingWSEvent>(body: T): void;
  unsubscribe<T extends IncomingWSEvent>(
    eventName: IncomingWSEventname,
    cb: IWebSocketHandler<T>
  ): void;
  subscribe<T extends IncomingWSEvent>(
    eventName: IncomingWSEventname,
    cb: IWebSocketHandler<T>
  ): void;
}

export interface IWebSocketHandler<T = any> {
  (body: T): void;
}

type base64 = string;

export enum ProtocolType {
  http = "http",
  https = "https",
  ws = "ws",
  wss = "wss",
}

export interface IWSTextMessage {
  event_name: "TEXT_MESSAGE";
  time: number;
  frame: base64;
  name: string;
}

export interface IWSImageMessage {
  event_name: "IMAGE_MESSAGE";
  time: number;
  frame: base64;
  name: string;
}

export interface IWSPoke {
  event_name: "POKE";
  friendly: boolean;
}

export interface IErrorCb {
  (errorStatus: number, errorMessage: string): void;
}

export type IncomingWSEvent = IWSTextMessage | IWSImageMessage;
export type OutgoingWSEvent = IWSPoke;
export type IncomingWSEventname = IncomingWSEvent["event_name"];
export type OutgoingWSEventname = OutgoingWSEvent["event_name"];
