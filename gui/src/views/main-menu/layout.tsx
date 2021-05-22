import SpotlightLayout from "../../layouts/spotlight";
import MainMenu from ".";

const MainMenuLayout: React.FC = () => {
  return <SpotlightLayout centerPanel={<MainMenu />} />;
};

export default MainMenuLayout;
