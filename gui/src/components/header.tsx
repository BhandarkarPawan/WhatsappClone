import React from "react";
import { Navbar } from "react-bootstrap";
export interface Props {
  title: string;
  subtitle?: string;
}

const Header: React.FC<Props> = (props) => {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Bhandarkar.io
        </Navbar.Brand>
      </Navbar>

      {/* <h1 className={"title"}>{title}</h1>
      <h5>{subtitle}</h5> */}
    </div>
  );
};

export default Header;
