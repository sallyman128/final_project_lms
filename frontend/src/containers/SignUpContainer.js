import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'
import validator from 'validator' 
import SignupForm from '../components/SignupForm';


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
        <SignupForm 
          handleSubmit={this.handleOnSubmit} 
          handleChange={this.handleOnChange}
          errors={this.state.errors}
        />
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