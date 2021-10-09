import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'
import validator from 'validator' 


class SignUpContainer extends Component {

  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: ""
      },
      errors: []
    }
  }

  handleOnChange = (e) => {
    this.setState( (currentState) => {
      return {
        user: {
          ...currentState.user,
          [e.target.id]: e.target.value
        }
      }
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if (this.validate()) {
      console.log('submitting signup form')
      this.props.signup(this.state.user)

      // display error message if unable to signup
      this.setState({errors: ["User email already exists"]})
    }
  }

  validate = () => {
    let errors = []
    let isValid = true

    if(!this.state.user.name) {
      isValid = false
      errors.push("Please enter your name.")
    }
  
    if(!this.state.user.email || !validator.isEmail(this.state.user.email)) {
      isValid = false
      errors.push("Please enter a valid email address.")
    }

    if(!this.state.user.password) {
      isValid = false
      errors.push("Please enter your password.")
    }

    this.setState({errors})
    return isValid
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>

        <div className="error-messages">
          <ul>
            {this.state.errors.map( error => <li key={error}>{error}</li>)}
          </ul>
        </div>

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
            Password:
            <input type="password" id="password" onChange={this.handleOnChange} />
          </p>
          <button type="submit" value="Login">Submit</button>
        </form>    
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userInfo) => dispatch(userActions.signup(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(SignUpContainer)