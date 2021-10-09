import React, {Component} from "react";

class NoRouteContainer extends Component {
  render() {
    return (
      <div className="error-messages">
        Sorry, this URL doesn't exist. Please use one of the above navigation bar options to get back on track.
      </div>
    )
  }
}

export default NoRouteContainer