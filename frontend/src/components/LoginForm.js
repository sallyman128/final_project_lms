import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'


class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        password: ""
      },
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
    console.log('submitting login form')
    this.props.login(this.state.user)
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
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