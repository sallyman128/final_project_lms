import React, {Component} from "react";
import CourseShowPublic from "../components/CourseShowPublic";
import CourseShowPrivate from "../components/CourseShowPrivate";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { courseActions } from "../actions/courseActions";

class CourseShowContainer extends Component {

  constructor() {
    super();
    this.state = {
      assignment: {
        title: "",
        description: ""
      }
    }
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

  // notEnrolledStudents = () => {
  //   const thisCourseId = this.findThisCourse().id
  //   const allStudents = this.props.students
  //   const notEnrolled = allStudents.filter(student => !student.course_ids.includes(thisCourseId))
  //   return notEnrolled
  // }

  isUserAssignedToCourse = () => {
    const thisCourseId = this.findThisCourse().id
    const userCoursesIds = this.props.userCourses.map( course => course.id )
    return userCoursesIds.includes(thisCourseId)
  }

  enrolledStudents = () => {
    const thisCourseId = this.findThisCourse().id
    const allStudents = this.props.students
    const enrolled = allStudents.filter(student => student.course_ids.includes(thisCourseId))
    return enrolled
  }

  handleShowAssignmentFields = () => {
    const div = document.getElementById('add-assignment')
    const assignmentForm = `
      <label>Title: </label>
      <input type='text' id='newAssignmentTitle' value='' />
      <label>Description: </label>
      <input id='newAssignmentDescription' value='' />
      <p>
        <button id="submitAssignment">Add Assignment</button>
        <button id="cancelSubmitAssignment">Cancel</button>
      </p>
    `
    div.innerHTML = assignmentForm

    document.addEventListener('keyup', this.updateStateAssignment)
    document.addEventListener('click', this.submitAssignment)
    document.addEventListener('click', this.cancelAddingAssigment)
  }

  updateStateAssignment = (e) => {
    if(e.target.id === 'newAssignmentTitle') {
      this.setState(prevState => {
        return {
          assignment: {
            ...prevState.assigment,
            title: e.target.value
          }
        }
      })
    } else if (e.target.id === 'newAssignmentDescription') {
      this.setState(prevState => {
        return {
          assignment: {
            ...prevState.assignment,
            description: e.target.value
          }
        }
      })
    }
  }

  submitAssignment = (e) => {
    if (e.target.id === 'submitAssignment') {
      console.log(this.state)
    }
  }

  cancelAddingAssigment = (e) => {
    if (e.target.id === "cancelSubmitAssignment") {
      document.removeEventListener('click', this.cancelAddingAssigment)
      document.removeEventListener('click', this.submitAssignment)
      document.removeEventListener('keyUp', this.updateStateAssignment)

      const assignmentDiv = document.getElementById("add-assignment")
      const originalHTML = `
        <button id="showAssignmentFieldsButton">Add Assignment</button>
      `
      assignmentDiv.innerHTML = originalHTML
      document.addEventListener('click', this.showNewAssignmentFields)
    }
  }

  showNewAssignmentFields = (e) => {
    if (e.target.id === "showAssignmentFieldsButton") {
      this.handleShowAssignmentFields()
    }
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
            enrolledStudents={this.enrolledStudents()}
            handleShowAssignmentFields={this.handleShowAssignmentFields}
            isUserAssignedToCourse={this.isUserAssignedToCourse()}
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
    loggedIn: state.usersReducer.loggedIn,
    userCourses: state.usersReducer.user.courses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: (course) => dispatch(courseActions.deleteCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseShowContainer)