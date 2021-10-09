import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'
import validator from 'validator';
import ErrorsList from '../components/ErrorsList';
import LoginForm from '../components/LoginForm';


class LoginContainer extends Component {

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
      <div>
        <h1>Login</h1>
        <LoginForm handleSubmit={this.handleOnSubmit} errors={this.state.errors} handleChange={this.handleOnChange}/>
      </div>   
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userInfo) => dispatch(userActions.login(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)