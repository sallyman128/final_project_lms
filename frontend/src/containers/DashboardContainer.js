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
        <h1>Welcome {this.props.name}</h1>
        <h3>Email: {this.props.email}</h3>
        <label>Below are the courses you are assigned to:</label>
        <div>
          {this.renderUserCourses()}
        </div>
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