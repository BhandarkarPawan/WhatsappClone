import React from "react";
import SpotlightLayout from "../../layouts/spotlight";
import SandBox from ".";

const SandBoxLayout: React.FC = () => {
  return <SpotlightLayout centerPanel={<SandBox />} />;
};

export default SandBoxLayout;
