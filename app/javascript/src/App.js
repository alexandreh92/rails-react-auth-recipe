import React from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import store from "./store";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

// import { Container } from './styles';

const App = () => (
  <Provider store={store}>
    <ReduxToastr />
    <Routes />
    <GlobalStyle />
  </Provider>
);

export default App;
