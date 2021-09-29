import React, {Component} from "react";
import CourseCard from "../components/CourseCard";
import {connect} from 'react-redux'

class CatalogContainer extends Component {

  renderAllCourses() {
    const allCourses = this.props.courses.courses
    return (
      allCourses.map(courseInfo => <CourseCard courseInfo={courseInfo} key={courseInfo.id} />)
    )
  }

  render() {
    return(
      <div>
        <h1>This is the CATALOG page!</h1>
        {this.props.courses.loading ? null : this.renderAllCourses()}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {courses: state.courses}
)

export default connect(mapStateToProps)(CatalogContainer)