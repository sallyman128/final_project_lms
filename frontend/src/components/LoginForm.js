import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'
import validator from 'validator';


class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      user: {
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
    if(this.validate()) {
      console.log('submitting login form')
      this.props.login(this.state.user)
    }
  }

  validate = () => {
    let errors = []
    let isValid = true
  
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
      <form onSubmit={this.handleOnSubmit}>
        <div className="error-messages">
          <ul>
            {this.state.errors.map( error => <li key={error}>{error}</li>)}
          </ul>
        </div>

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
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userInfo) => dispatch(userActions.login(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)