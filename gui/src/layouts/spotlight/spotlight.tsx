import React from "react";
import { Footer } from "../../global-components/footer/footer";
import useStyles from "./spotlight.styles";

export interface Props {
  centerPanel: React.ReactElement;
}

const SpotlightLayout: React.FC<Props> = (props) => {
  const CenterPanel = props.centerPanel;

  const styles = useStyles();

  return (
    <div className={styles.spotlight}>
      <div className="center-panel">{CenterPanel}</div>
      <Footer />
    </div>
  );
};

export default SpotlightLayout;
