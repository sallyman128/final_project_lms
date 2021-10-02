import React, {Component} from "react";
import {connect} from 'react-redux'
import {courseActions} from '../actions/courseActions'

class CourseShow extends Component {

  handleOnClick = () => {

  }

  render() {
    return (
      <div>
        This is the course show page
        <button onClick={this.handleOnClick}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCourse: (course) => dispatch(courseActions.deleteCourse(course))
  }
}

export default connect(null, mapDispatchToProps)(CourseShow);