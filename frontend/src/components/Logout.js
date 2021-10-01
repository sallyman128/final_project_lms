import React, {Component} from "react";
import {connect} from 'react-redux'
import { userActions } from "../actions/userActions";

class Logout extends Component {

  componentDidMount() {
    this.props.logout()
  }

  render() {
    return (
      <div>
        Logout
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(userActions.logout)
  }
}

export default connect(null, mapDispatchToProps)(Logout);