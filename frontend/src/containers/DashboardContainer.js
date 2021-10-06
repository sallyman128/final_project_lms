import React, {Component} from "react";
import CourseCard from "../components/CourseCard";
import { connect } from "react-redux";

class DashboardContainer extends Component {
  renderUserCourses() {
    const currentUserCourses = this.findUserCourses()
    return (
      currentUserCourses.map(courseInfo => <CourseCard courseInfo={courseInfo} key={courseInfo.id} />)
    )
  }

  findUserCourses() {
    const currentUser = this.props.user;
    const allCourses = this.props.courses
    const currentUserCourses = allCourses.filter(course => course.user_ids.includes(currentUser.id))
    return currentUserCourses
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.name}</h1>
        <h3>Email: {this.props.user.email}</h3>
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
    user: state.usersReducer.user,
    courses: state.coursesReducer.courses
  }
}

export default connect(mapStateToProps)(DashboardContainer);