import React from "react";
import StudentsTable from "./StudentsTable";

const CourseShowPrivate = ({
  assignments, course, handleDelete, enrolledStudents, unEnrolledStudents, 
  handleShowAssignmentFields, isUserAssignedToCourse, newAssignmentErrors, handleAddingStudent
  }) => {
  return (
    <div>
      <h1>Title: {course.title}</h1>

      <h2>Description: {course.description}</h2>

      <h3>Students</h3>
      <select id="addStudentSelect">
        <option value="blank"> </option> {/* blank option */}
        {unEnrolledStudents.map( student => <option value={student.id} key={student.name}>{student.name}</option>)}
      </select>
      <button id="addStudentButton" onClick={handleAddingStudent}>Add</button>
      
      {enrolledStudents.length === 0 ? <p>No students assigned</p> : <StudentsTable students={enrolledStudents}/> }

      <h3>Assignments</h3>

      <ul id='new-assignment-errors'>
        {newAssignmentErrors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <div id="add-assignment">
        {isUserAssignedToCourse ? <button id= "showAssignmentFieldsButton" onClick={() => handleShowAssignmentFields()}>Add Assignment</button> : null }
      </div>

      {assignments.length === 0 ? <p>No assignments assigned</p> : 
        <div>
          <ol>
            {assignments.map( assignment => {
              return (
                <div key={assignment.id} id={assignment.id} class="assignment">
                  <li>{assignment.title}</li>
                  <i>{assignment.description}</i>
                </div>
              )
            })}
          </ol>
        </div>
      }

      {isUserAssignedToCourse ? <button onClick={() => handleDelete(course)}>Delete Course</button> : null }
      {/* <button>Edit Course Details</button> */}
    </div>
  )
}

export default CourseShowPrivate;