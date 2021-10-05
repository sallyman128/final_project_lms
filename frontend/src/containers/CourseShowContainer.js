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
        description: "",
        course_id: ""
      },
      newAssignmentErrors: []
    }
  }

  findThisCourse = () => {
    const thisCourse = this.props.courses.find( course => course.id === parseInt(this.props.match.params.id))
    return thisCourse
  }

  handleDelete = (course) => {
    console.log('pressed delete button')
    this.props.deleteCourse(course)
    // this.render(<Redirect to='/' />)
  }

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

  /***************** DOM manipulation for new assignment fields *************************/

  // first time user clicks to add assignment, fields will appear
  handleShowAssignmentFields = () => {
    const div = document.getElementById('add-assignment')
    const assignmentForm = `
      <label>Title: </label>
      <input type='text' id='newAssignmentTitle' value='' />
      <label>Description: </label>
      <input id='newAssignmentDescription' value='' />
      <p>
        <button id="submitAssignment">Submit New Assignment</button>
        <button id="cancelNewAssignment">Cancel</button>
      </p>
    `
    div.innerHTML = assignmentForm

    document.addEventListener('keyup', this.updateStateAssignment)
    document.addEventListener('click', this.submitAssignment)
    document.addEventListener('click', this.cancelNewAssignment)
  }

  // dynamically update state with the inputted assignment details
  updateStateAssignment = (e) => {
    if(e.target.id === 'newAssignmentTitle') {
      this.setState(prevState => {
        return {
          ...prevState,
          assignment: {
            ...prevState.assignment,
            title: e.target.value
          }
        }
      })
    } else if (e.target.id === 'newAssignmentDescription') {
      this.setState(prevState => {
        return {
          ...prevState,
          assignment: {
            ...prevState.assignment,
            description: e.target.value
          }
        }
      })
    }
  }

  // submit the assignment details or return some errors
  submitAssignment = (e) => {
    if (e.target.id === 'submitAssignment') {
      this.setState( prevState => {
        return {
          assignment: {
            ...prevState.assignment,
            course_id: this.findThisCourse().id
          }
        }
      })

      if (this.validateAssignmentState()) {
        console.log('no errors in state')
        console.log(this.state)
        this.removeNewAssignmentFields()
      }
    }
  }

  validateAssignmentState = () => {
    const assignment = this.state.assignment
    let errors = []
    let valid = true

    if(assignment.title === "") {
      errors.push("Please enter a title.")
      valid = false
    }

    if(assignment.description === "") {
      errors.push("Please enter a description.")
      valid = false
    }

    this.setState({
      newAssignmentErrors: errors
    })
    return valid
  }

  // cancel the adding assignment process and rerender original html
  cancelNewAssignment = (e) => {
    if (e.target.id === "cancelNewAssignment") {
      this.setState({
        newAssignmentErrors: [],
      })
      this.removeNewAssignmentFields()
    }
  }

  removeNewAssignmentFields = () => {
    document.removeEventListener('click', this.cancelNewAssigment)
    document.removeEventListener('click', this.submitAssignment)
    document.removeEventListener('keyUp', this.updateStateAssignment)

    const assignmentDiv = document.getElementById("add-assignment")
    const originalHTML = `
      <button id="showAssignmentFieldsButton">Add Assignment</button>
    `
    assignmentDiv.innerHTML = originalHTML
    document.addEventListener('click', this.showNewAssignmentFields)
  }

  // original event handler that was passed with the original props
  showNewAssignmentFields = (e) => {
    if (e.target.id === "showAssignmentFieldsButton") {
      this.handleShowAssignmentFields()
    }
  }

  /********************************************************************************************/

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
            newAssignmentErrors = {this.state.newAssignmentErrors}
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