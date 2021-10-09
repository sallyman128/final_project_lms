import React, {Component} from "react";
import CourseShowPublic from "../components/CourseShowPublic";
import CourseShowPrivate from "../components/CourseShowPrivate";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { courseActions } from "../actions/courseActions";
import { assignmentActions } from "../actions/assignmentActions";

class CourseShowContainer extends Component {

  constructor() {
    super();
    this.state = {
      assignment: {
        title: "",
        description: "",
        course_id: ""
      },
      courseAndStudentIds: {
        studentId: "",
        courseId: ""
      },
      course: {
        id: "",
        title: "",
        description: ""
      },
      newAssignmentErrors: []
    }
  }

  findThisCourse = () => {
    const thisCourse = this.props.courses.find( course => course.id === parseInt(this.props.match.params.id))
    return thisCourse
  }

  courseAssignments = () => {
    const thisCourse = this.findThisCourse()
    const allAssignments = this.props.assignments
    return allAssignments.filter( assignment => assignment.course_id === thisCourse.id)
  }

  isUserAssignedToCourse = () => {
    const thisCourseId = this.findThisCourse().id
    const userCoursesIds = this.props.user.courseIds
    return userCoursesIds.includes(thisCourseId)
  }

  /***************************************** Edit course *************************************************/
  handleEditButton = (course) => {
    console.log('clicked edit button')
    console.log(course)
    this.setState({
      course: {
        title: course.title,
        description: course.description,
        id: course.id
      }
    })
    
    this.addEditFields()
  }

  // dynamically change DOM to show edit fields
  addEditFields = () => {
    let titleHeader = document.getElementById("courseTitle")
    let descriptionHeader = document.getElementById("courseDescription")

    titleHeader.innerHTML = `
      <h1>
        Title: 
        <input id='newCourseTitle' type="string" value="${this.state.course.title}" />
      </h1>
    `
    descriptionHeader.innerHTML = `
      <h2>
        Description: 
        <input id='newCourseDescription' type="string" value="${this.state.course.description}" />
      </h2>
    `
  }

  /***************************************** Delete course *************************************************/
  handleDelete = (courseInfo) => {
    console.log('pressed delete button')
    this.props.deleteCourse(courseInfo)
  }

  /***************************************** Adding new student to course *************************************/

  enrolledStudents = () => {
    const thisCourseId = this.findThisCourse().id
    const allStudents = this.props.students
    const enrolled = allStudents.filter(student => student.course_ids.includes(thisCourseId))
    return enrolled
  }

  unEnrolledStudents = () => {
    const thisCourseId = this.findThisCourse().id
    const allStudents = this.props.students
    const unEnrolled = allStudents.filter(student => !student.course_ids.includes(thisCourseId))
    return unEnrolled
  }

  handleAddingStudent = () => {
    console.log("clicked button")
    const studentId = parseInt(document.getElementById('addStudentSelect').value)
    const courseId = this.findThisCourse().id
    this.setState({
      courseAndStudentIds: {
        studentId,
        courseId 
      }
    })

    if(this.validateAddingStudent()) {
      console.log(this.state.courseAndStudentIds)
      this.props.addStudent(this.state.courseAndStudentIds)
    }
  }

  validateAddingStudent = () => {
    let valid = true

    if(this.state.courseAndStudentIds.studentId === "") {
      valid = false
    }

    return valid
  }

  /***************************** DOM manipulation for new assignment fields *************************************/

  // first time user clicks to add assignment, fields will appear
  handleShowAssignmentFields = () => {
    const div = document.getElementById('add-assignment')
    const assignmentForm = `
      <div>
        <label>Title: </label>
        <input type='text' id='newAssignmentTitle' value='' />
      </div>
      <div>
        <label>Description: </label>
        <input type='text' id='newAssignmentDescription' value='' />
      </div>
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
    switch(e.target.id) {
      case "newAssignmentTitle":
        this.setState(prevState => {
          return {
            ...prevState,
            assignment: {
              ...prevState.assignment,
              title: e.target.value
            }
          }
        })
      case 'newAssignmentDescription':
        this.setState(prevState => {
          return {
            ...prevState,
            assignment: {
              ...prevState.assignment,
              description: e.target.value
            }
          }
        })

      default: 
        return null
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
        console.log('no errors in newAssignment state')
        this.props.addAssignment(this.state.assignment)
        this.resetNewAssignmentFields()
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
      this.resetNewAssignmentFields()
    }
  }

  resetNewAssignmentFields = () => {
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

  /**************************************************************************************************************/

  render() {
    const thisCourse = this.findThisCourse()
    if (this.props.loggedIn) {
      return (
        <div>
          {!!thisCourse ? 
            <CourseShowPrivate 
            course={thisCourse}
            assignments={this.courseAssignments()}
            handleDelete={this.handleDelete}
            enrolledStudents={this.enrolledStudents()}
            handleShowAssignmentFields={this.handleShowAssignmentFields}
            isUserAssignedToCourse={this.isUserAssignedToCourse()}
            newAssignmentErrors = {this.state.newAssignmentErrors}
            unEnrolledStudents = {this.unEnrolledStudents()}
            handleAddingStudent = {this.handleAddingStudent}
            handleEditButton = {this.handleEditButton}
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
    user: state.usersReducer.currentUser,
    assignments: state.assignmentsReducer.assignments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: (courseId) => dispatch(courseActions.deleteCourse(courseId)),
    addAssignment: (assignment) => dispatch(assignmentActions.postNewAssignment(assignment)),
    addStudent: (courseAndStudentIds) => dispatch(courseActions.addStudent(courseAndStudentIds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseShowContainer)