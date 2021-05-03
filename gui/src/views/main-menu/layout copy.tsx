import React from "react";
import SpotlightLayout from "../../layouts/spotlight/spotlight";
import Login from "./content-panel";

const LoginLayout: React.FC = () => {
  return <SpotlightLayout centerPanel={<Login />} />;
};
