import React from "react";
import StudentsTable from "./StudentsTable";

const CourseShowPrivate = ({
  assignments, course, handleDelete, enrolledStudents, unEnrolledStudents, handleEditButton, editCourseErrors,
  handleShowAssignmentFields, isUserAssignedToCourse, newAssignmentErrors, handleAddingStudent
  }) => {
  return (
    <div>
      <ul id='edit-course-errors'>
        {editCourseErrors.map ( error => <li key={error} className="error-messages">{error}</li>)}
      </ul>

      <h1 id='courseTitle'>Title: {course.title}</h1>

      <h2 id='courseDescription'>Description: {course.description}</h2>

      <h3>Students</h3>
      <select id="addStudentSelect">
        <option value="blank"> </option> {/* blank option */}
        {unEnrolledStudents.map( student => <option value={student.id} key={student.name}>{student.name}</option>)}
      </select>
      <button id="addStudentButton" onClick={handleAddingStudent}>Add</button>
      
      {enrolledStudents.length === 0 ? <p>No students assigned</p> : <StudentsTable students={enrolledStudents}/> }

      <h3>Assignments</h3>

      <ul id='new-assignment-errors'>
        {newAssignmentErrors.map(error => <li key={error} className='error-messages'>{error}</li>)}
      </ul>
      <div id="add-assignment">
        {isUserAssignedToCourse ? <button id= "showAssignmentFieldsButton" onClick={() => handleShowAssignmentFields()}>Add Assignment</button> : null }
      </div>

      {assignments.length === 0 ? <p>No assignments assigned</p> : 
        <div>
          <ol>
            {assignments.map( assignment => {
              return (
                <div key={assignment.id} id={assignment.id} className="assignment">
                  <li>{assignment.title}</li>
                  <i>{assignment.description}</i>
                </div>
              )
            })}
          </ol>
        </div>
      }
      
      <div id="courseButtons">
        {isUserAssignedToCourse ? <button onClick={() => handleDelete(course)}>Delete Course</button> : null }
        {isUserAssignedToCourse ? <button id="editCourseButton" onClick={(e) => handleEditButton(e)}>Edit Course Details</button> : null }
      </div>
    </div>
  )
}

export default CourseShowPrivate;