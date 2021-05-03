import { IAppContextValue } from "../app-context";
import { ProtocolType } from "../services/entities";
import { HTTPClient } from "../services/http-client";
import { WSClient } from "../services/ws-client";

// TODO: use ENV variables
export default async function makeAppContextValue(): Promise<IAppContextValue> {
  const defaultAppContextValue: IAppContextValue = {
    debugString: "dololoio!!",
    httpClient: new HTTPClient(),
    wsClient: new WSClient("localhost:5000", ProtocolType.http, null),
  };

  return defaultAppContextValue;
}
