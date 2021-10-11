import React from "react";
import AssignmentsList from "./AssignmentsList";
import ErrorsList from "./ErrorsList";
import StudentsTable from "./StudentsTable";

const CourseShowPrivate = ({
  assignments, course, handleDelete, enrolledStudents, unEnrolledStudents, handleEditButton, editCourseErrors,
  handleShowAssignmentFields, isUserAssignedToCourse, newAssignmentErrors, handleAddingStudent, handleUnenrollStudentButton
  }) => {
  return (
    <div>
      <ErrorsList errors={editCourseErrors}/>
      <h1 id='courseTitle'>Title: {course.title}</h1>
      <h2 id='courseDescription'>Description: {course.description}</h2>

      <h3>Students</h3>
      {!isUserAssignedToCourse ? null :
        <div>
          <select id="addStudentSelect">
            <option value=""> </option> {/* blank option */}
            {unEnrolledStudents.map( student => <option value={student.id} key={student.name}>{student.name}</option>)}
          </select>
          <button id="addStudentButton" onClick={handleAddingStudent}>Add</button>
        </div>
      }
      {enrolledStudents.length === 0 ? <p>No students assigned</p> : 
        <StudentsTable students={enrolledStudents} userCanEdit={isUserAssignedToCourse} handleOnClick={handleUnenrollStudentButton}/> }

      <h3>Assignments</h3>
      <ErrorsList errors={newAssignmentErrors} />
      <div id="add-assignment">
        {isUserAssignedToCourse ? <button id= "showAssignmentFieldsButton" onClick={() => handleShowAssignmentFields()}>Add Assignment</button> : null }
      </div>
      {assignments.length === 0 ? <p>No assignments assigned</p> : <AssignmentsList assignments={assignments} />}
      
      <div id="courseButtons">
        {isUserAssignedToCourse ? <button onClick={() => handleDelete(course)}>Delete Course</button> : null }
        {isUserAssignedToCourse ? <button id="editCourseButton" onClick={(e) => handleEditButton(e)}>Edit Course Details</button> : null }
      </div>
    </div>
  )
}

export default CourseShowPrivate;