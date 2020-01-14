import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
