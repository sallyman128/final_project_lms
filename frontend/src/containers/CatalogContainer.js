import React, {Component} from "react";
import CourseCard from "../components/CourseCard";

class CatalogContainer extends Component {
  renderAllCourses() {
    // rendering dummy data
    const dummyData = [
      {id: 1, courseId: "MATH301", title: "Mathemetics"},
      {id: 2, courseId: "ENG412", title: "English"},
      {id: 3, courseId: "CHEM101", title: "Chemistry"},
      {id: 4, courseId: "MATH301", title: "Mathemetics"},
      {id: 5, courseId: "ENG412", title: "English"},
      {id: 6, courseId: "CHEM101", title: "Chemistry"}
    ]

    return (
      dummyData.map(courseInfo => <CourseCard courseInfo={courseInfo} />)
    )
  }

  render() {
    return(
      <div>
        <h1>This is the CATALOG page!</h1>
        {this.renderAllCourses()}
      </div>
    )
  }
}

export default CatalogContainer