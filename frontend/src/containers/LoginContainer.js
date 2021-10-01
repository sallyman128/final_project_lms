import React, {Component} from "react";
import LoginForm from "../components/LoginForm";

class LoginContainer extends Component {

  render() {
    return(
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    )
  }
}

export default LoginContainer;