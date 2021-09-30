import React, {Component} from "react";

class LoginForm extends Component {
  constructor() {
    super();
    const state = {
      email: "",
      password: ""
    }
  }

  handleOnChange() {

  }

  render() {
    return (
      <form>
        <label>
          Email: 
          <input type="string" id="email" onChange={this.handleOnChange} />
        </label>
        <label>
          Password
          <input type="password" id="email" onChange={this.handleOnChanges} />
        </label>
        <button type="submit" value="Login">Submit</button>
      </form>
    )
  }
}

export default LoginForm

