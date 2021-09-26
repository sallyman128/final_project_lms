import React, {Component} from "react";
import CourseCard from "../components/CourseCard";

class DashboardContainer extends Component {
  renderUserCourses() {
    // rendering dummy data
    const dummyData = [
      {id: 1, courseId: "MATH301", title: "Mathemetics"},
      {id: 2, courseId: "ENG412", title: "English"},
      {id: 3, courseId: "CHEM101", title: "Chemistry"}
    ]

    return (
      dummyData.map(courseInfo => <CourseCard courseInfo={courseInfo} key={courseInfo.id} />)
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

export default DashboardContainer;