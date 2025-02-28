import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import store from "../store";

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !store.getState().auth.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default GuestRoute;
