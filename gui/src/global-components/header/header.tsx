import React from "react";
import useStyles from "./header.styles";

export interface Props {
  title: string;
  subtitle?: string;
}

const Header: React.FC<Props> = (props) => {
  const styles = useStyles();
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <div className={styles.header}>
      <h1 className={"title"}>{title}</h1>
      <h5>{subtitle}</h5>
    </div>
  );
};

export default Header;
