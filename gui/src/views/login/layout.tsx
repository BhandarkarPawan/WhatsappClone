import React from "react";
import SpotlightLayout from "../../layouts/spotlight";
import Login from ".";

const LoginLayout: React.FC = () => {
  return (
    <div className="login">
      <SpotlightLayout centerPanel={<Login />} />
    </div>
  );
};

export default LoginLayout;
