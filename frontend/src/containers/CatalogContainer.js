import React, {Component} from "react";
import CourseCard from "../components/CourseCard";
import {connect} from 'react-redux'

class CatalogContainer extends Component {

  renderAllCourses() {
    const allCourses = this.props.courses
    return (
      allCourses.map(courseInfo => <CourseCard courseInfo={courseInfo} key={courseInfo.id} />)
    )
  }

  render() {
    return(
      <div>
        <h1>This is the CATALOG page!</h1>
        {this.props.loading ? null : this.renderAllCourses()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.coursesReducer.courses,
    loading: state.coursesReducer.loading
  }
}

export default connect(mapStateToProps)(CatalogContainer)