import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions';
import validator from 'validator';
import SignupForm from '../components/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Signup.css';  // Assuming you have additional styles in this file

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
      console.log('submitting signup form');
      this.props.signup(this.state.user);
    }
  }

  validate = () => {
    let errors = [];
    let isValid = true;

    if (!this.state.user.name) {
      isValid = false;
      errors.push("Please enter your name.");
    }
  
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
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5">Please enter your details to sign up!</p>
                    <SignupForm 
                      handleSubmit={this.handleOnSubmit} 
                      errors={this.state.errors} 
                      handleChange={this.handleOnChange}
                    />
                  </div>
                  <div>
                    <p className="mb-0">Already have an account? <a href="/login" className="text-white-50 fw-bold">Login</a></p>
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
    signup: (userInfo) => dispatch(userActions.signup(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(SignUpContainer);