import React, {Component} from "react";
import CourseShow from "../components/CourseShow";
import { connect } from "react-redux";

class CourseShowContainer extends Component {

  findThisCourse = () => {
    return (
      this.props.courses.find( course => course.id === parseInt(this.props.match.params.id))
    )
  }

  handleDelete = (e) => {
    
  }

  render() {
    const thisCourse = this.findThisCourse()
    return (
      <div>
        {thisCourse ? <CourseShow course={thisCourse} handleDelete={this.handleDelete}/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.coursesReducer.courses
  }
}

export default connect(mapStateToProps)(CourseShowContainer)