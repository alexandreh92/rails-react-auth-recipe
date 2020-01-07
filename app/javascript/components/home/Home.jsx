import React, { Component } from 'react'
import Registration from '../auth/Registration'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSucessfullAuth = this.handleSucessfullAuth.bind(this)
    
  }

  componentDidUpdate() {
    // if(this.props.loggedInStatus === "LOGGED_IN"){
    //   this.props.history.push("/dashboard")
    // }
  }

  handleSucessfullAuth(data){
    this.props.handleLogin(data)
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <React.Fragment>
        <div>This is Home</div>
        <div>Status: {this.props.loggedInStatus}</div>
        <Registration handleSucessfullAuth={this.handleSucessfullAuth}/>
      </React.Fragment>

    )
  }
}