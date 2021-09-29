import React, {Component} from "react";
import CourseCard from "../components/CourseCard";
import {connect} from 'react-redux'

class CatalogContainer extends Component {
  renderAllCourses() {
    // rendering dummy data
    // const dummyData = [
    //   {id: 1, courseId: "MATH301", title: "Mathemetics"},
    //   {id: 2, courseId: "ENG412", title: "English"},
    //   {id: 3, courseId: "CHEM101", title: "Chemistry"},
    //   {id: 4, courseId: "MATH301", title: "Mathemetics"},
    //   {id: 5, courseId: "ENG412", title: "English"},
    //   {id: 6, courseId: "CHEM101", title: "Chemistry"}
    // ]
    const courses = this.props.courses
    debugger;
    return (
      courses.map(courseInfo => <CourseCard courseInfo={courseInfo} key={courseInfo.id} />)
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

const mapStateToProps = (state) => (
  {courses: state.courses}
)

export default connect(mapStateToProps)(CatalogContainer)