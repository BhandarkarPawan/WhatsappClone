import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import makeAppContextValue from "./factories/make-app-context-value";
import { AppContextProvider } from "./app-context";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

require("dotenv").config();

makeAppContextValue().then((appContextValue) => {
  ReactDOM.render(
    <AppContextProvider value={appContextValue}>
      <Routes />
    </AppContextProvider>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
