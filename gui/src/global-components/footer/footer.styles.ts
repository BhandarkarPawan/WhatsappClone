import { ITheme } from "../../app-theme";
const { createUseStyles } = require("react-jss");

export default createUseStyles((theme: ITheme) => ({
  footer: {
    backgroundColor: "#0068b6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
