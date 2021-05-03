import React from "react";
import { IHTTPClient, IWSClient } from "./services/entities";

export interface IAppContextValue {
  debugString: string | null;
  httpClient: IHTTPClient | null;
  wsClient: IWSClient | null;
}

const AppContext = React.createContext<IAppContextValue>({
  debugString: "toto",
  httpClient: null,
  wsClient: null,
});

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;
