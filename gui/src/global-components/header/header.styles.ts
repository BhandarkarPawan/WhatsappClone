import { ITheme } from "../../app-theme";
const { createUseStyles } = require('react-jss');

export default createUseStyles((theme: ITheme) => ({
    header: {
        backgroundColor: "#0068b6",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
  }
))


