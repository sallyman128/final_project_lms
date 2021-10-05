import React, {Component} from "react";
import CourseShow from "../components/CourseShow";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { courseActions } from "../actions/courseActions";

class CourseShowContainer extends Component {

  constructor() {
    super();
  }

  findThisCourse = () => {
    return (
      this.props.courses.find( course => course.id === parseInt(this.props.match.params.id))
    )
  }

  handleDelete = (course) => {
    console.log('pressed delete button')
    this.props.deleteCourse(course)
    // this.render(<Redirect to='/' />)
  }

  render() {
    const thisCourse = this.findThisCourse()
    return (
      <div>
        {!!thisCourse ? <CourseShow course={thisCourse} handleDelete={this.handleDelete} freeStudents={this.props.students}/>
          : <Redirect to='/courses' />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.coursesReducer.courses,
    students: state.studentsReducer.students
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: (course) => dispatch(courseActions.deleteCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseShowContainer)