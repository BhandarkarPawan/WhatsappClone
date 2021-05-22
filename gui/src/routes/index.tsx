import React from "react";
import {
  HashRouter as Router,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import LoginLayout from "../views/login/layout";
import MainMenuLayout from "../views/main-menu/layout";
import SandBoxLayout from "../views/sandbox/layout";

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={RedirectWrapper} />
      <Route exact path="/login" component={LoginLayout} />
      <Route exact path="/main" component={MainMenuWrapper} />
    </Router>
  );
};

export default Routes;

const RedirectWrapper: React.FC<RouteComponentProps> = (props) => {
  return <SandBoxLayout />;
};

const MainMenuWrapper: React.FC<RouteComponentProps> = (props) => {
  return <MainMenuLayout />;
};
