import React, {Component} from "react";
import CourseShowPublic from "../components/CourseShowPublic";
import CourseShowPrivate from "../components/CourseShowPrivate";
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

  // returns only the students not assigned to the course
  notEnrolledStudents = () => {
    const allStudents = this.props.students
    const thisCourseStudents = this.findThisCourse().students
    return allStudents
  }

  enrolledStudents = () => {
    const allStudents = this.props.students
    return allStudents
  }

  render() {
    const thisCourse = this.findThisCourse()
    if (this.props.loggedIn) {
      return (
        <div>
          {!!thisCourse ? 
            <CourseShowPrivate 
            course={thisCourse} 
            handleDelete={this.handleDelete}
            notEnrolledStudents={this.notEnrolledStudents()}
            enrolledStudents={this.enrolledStudents()}
            />
            : <Redirect to='/courses' />}
      </div>
      )
    }
    return (
      <div>
        {!!thisCourse ? 
          <CourseShowPublic 
            course={thisCourse} 
          />
          : <Redirect to='/courses' />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.coursesReducer.courses,
    students: state.studentsReducer.students,
    loggedIn: state.usersReducer.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: (course) => dispatch(courseActions.deleteCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseShowContainer)