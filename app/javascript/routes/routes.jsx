import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import axios from 'axios'
import Home from "../components/home/Home"
import Dashboard from "../components/dashboard/Dashboard";


const isUserLoggedIn = () =>{
  return axios.get("/logged_in", { withCredentials: true })
  .then(response => {
    this.response = response.logged_in
    return this.response
  })
}

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.checkLoginStatus = this.checkLoginStatus.bind(this)
  }
  
  componentDidMount() {
    this.checkLoginStatus()
  }

  checkLoginStatus() {
    axios.get("/logged_in", { withCredentials: true })
      .then(resp => {
        if (resp.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: resp.data.user
          })
        }
        else if (!resp.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          })
        }
      })
      .catch(error => console.log(error))
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact render={props => (
          isUserLoggedIn() ? 
          <Redirect to="/dashboard"/>
        : <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
        )} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    )
  }
}

export default Routes;