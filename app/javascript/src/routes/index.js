import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Private from "./private";
import Guest from "./guest";

import history from "./history";

import Main from "../pages/Main";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Private exact path="/" component={Main} />
      <Guest path="/sign_in" component={SignIn} />
      <Guest path="/sign_up" component={SignUp} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
