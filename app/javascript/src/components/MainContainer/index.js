import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthActions from "../../store/ducks/auth";

import Menu from "../../styles/menu";

// import { Container } from './styles';

class MainContainer extends Component {
  render() {
    const { signOut } = this.props;
    return (
      <div>
        <Menu>
          <button onClick={signOut}>Logout</button>
        </Menu>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions }, dispatch);

export default connect(null, mapDispatchToProps)(MainContainer);
