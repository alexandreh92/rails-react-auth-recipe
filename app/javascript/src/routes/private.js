import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import store from "../store";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().auth.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/sign_in", state: { from: props.location } }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
