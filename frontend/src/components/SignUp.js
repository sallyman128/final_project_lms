import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'


class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: ""
      }
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
    console.log('form submitting user')
    this.props.addUser(this.state.user)
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
    addUser: (userInfo) => dispatch(userActions.addUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)