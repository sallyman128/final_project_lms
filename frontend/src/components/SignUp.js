import React, {Component} from 'react'

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
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
    e.preventDefault();

    fetch("http://localhost:9999/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: this.state
      }),
    })
    .then( resp => resp.json())
    .then(console.log('trying to save to local storage'))
    .then( data => localStorage.setItem("jwt", data.jwt) )
    //setUser(data.user) save the user data to state
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            Name:
            <input type="string" id="name" onChange={this.handleOnChange} />
          </p>
          <p>
              Email: 
              <input type="string" id="email" onChange={this.handleOnChange} />
            </p>
            <p>
              Password
              <input type="password" id="password" onChange={this.handleOnChange} />
            </p>
            <button type="submit" value="Login">Submit</button>
        </form>    
      </div>
    )
  }
}

export default SignUp