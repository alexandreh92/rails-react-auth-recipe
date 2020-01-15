import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Private from "./private";
import Guest from "./guest";

import history from "./history";

import Main from "../pages/Main";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Test from "../components/test";
import Menu from "../styles/menu";
import MainContainer from "../components/MainContainer";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={["/", "/test"]}>
        <MainContainer>
          <Private exact path="/" component={Main} />
          <Private exact path="/test" component={Test} />
        </MainContainer>
      </Route>

      <Guest path="/sign_in" component={SignIn} />
      <Guest path="/sign_up" component={SignUp} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
