import React from "react";

const AssignmentsList = ({assignments}) => {
  return (
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
  )
}

export default AssignmentsList