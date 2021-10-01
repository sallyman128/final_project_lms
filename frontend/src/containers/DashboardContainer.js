import React, {Component} from "react";
import CourseCard from "../components/CourseCard";
import { connect } from "react-redux";

class DashboardContainer extends Component {
  renderUserCourses() {
    return (
      this.props.courses.map(courseInfo => <CourseCard courseInfo={courseInfo} key={courseInfo.id} />)
    )
  }

  render() {
    return (
      <div>
        <h1>This is the Dashboard page</h1>
        {this.renderUserCourses()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.usersReducer.user.name,
    email: state.usersReducer.user.email,
    courses: state.usersReducer.user.courses
  }
}

export default connect(mapStateToProps)(DashboardContainer);