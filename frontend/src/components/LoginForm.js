import React, {Component} from "react";
import { userActions } from "../actions/userActions";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    userActions.login(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} >
        <label>
          Email: 
          <input type="string" id="email" onChange={this.handleOnChange} />
        </label>
        <label>
          Password
          <input type="password" id="password" onChange={this.handleOnChange} />
        </label>
        <button type="submit" value="Login">Submit</button>
      </form>
    )
  }
}

export default LoginForm

