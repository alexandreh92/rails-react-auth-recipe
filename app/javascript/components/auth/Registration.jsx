import React, { Component } from 'react'
import axios from 'axios'

class Registration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      registrationErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const {email, password} = this.state
    const resource = {user: {email: email, password: password}}
    axios.post("/registrations", resource, { withCredentials: true })
    .then(resp => {
      if(resp.data.status === 'created'){
        this.props.handleSucessfullAuth(resp.data)
      }
    })
    .catch(error => console.log(error))
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Pwwd"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Registration