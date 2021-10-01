import React, {Component} from "react";
import { connect } from "react-redux";

class CourseForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <h1>New course form</h1>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(null, mapDispatchToProps)(CourseForm)