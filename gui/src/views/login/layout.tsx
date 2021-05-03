import React from "react";
import SpotlightLayout from "../../layouts/spotlight/spotlight";
import Login from "./content-panel";
import useStyles from "./layout.styles";

const LoginLayout: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.loginLayout}>
      <SpotlightLayout centerPanel={<Login />} />
    </div>
  );
};

export default LoginLayout;
