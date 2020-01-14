import React, { Component } from "react";
import api from "../../services/api";

// import { Container } from './styles';

export default class Main extends Component {
  componentDidMount() {
    api.get("/teste");
  }

  render() {
    return <div>Hello</div>;
  }
}
