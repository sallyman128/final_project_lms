import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions';
import validator from 'validator';
import LoginForm from '../components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

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
    this.setState((currentState) => {
      return {
        user: {
          ...currentState.user,
          [e.target.id]: e.target.value
        }
      }
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log('submitting login form');
      this.props.login(this.state.user);
    }
  }

  validate = () => {
    let errors = [];
    let isValid = true;

    if (!this.state.user.email || !validator.isEmail(this.state.user.email)) {
      isValid = false;
      errors.push("Please enter a valid email address.");
    }

    if (!this.state.user.password) {
      isValid = false;
      errors.push("Please enter your password.");
    }

    this.setState({ errors });
    return isValid;
  }

  render() {
    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <LoginForm 
                      handleSubmit={this.handleOnSubmit} 
                      errors={this.state.errors} 
                      handleChange={this.handleOnChange}
                    />
                  </div>
                  <div>
                    <p className="mb-0">Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userInfo) => dispatch(userActions.login(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);