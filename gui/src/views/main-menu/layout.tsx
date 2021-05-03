import SpotlightLayout from "../../layouts/spotlight/spotlight";
import MainMenu from "./content-panel";
import useStyles from "./layout.styles";

const MainMenuLayout: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.loginLayout}>
      <SpotlightLayout centerPanel={<MainMenu />} />
    </div>
  );
};

export default MainMenuLayout;
