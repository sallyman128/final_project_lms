import React from "react";

const StudentsTable = ({students, userCanEdit, handleOnClick}) => {
  return (
    <table id="students-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map( student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            {userCanEdit ? 
              <button className='studentRemoveButton' id={student.id} onClick={(e) => handleOnClick(e)}>
                X
              </button> : null}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentsTable