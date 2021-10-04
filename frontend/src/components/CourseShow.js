import React, {Component} from "react";
import {connect} from 'react-redux'
import {courseActions} from '../actions/courseActions'

class CourseShow extends Component {

  // handleOnClick = () => {

  // }

  render() {
    return (
      <div>
        <h1>
          Title: {this.props.course.title}
        </h1>
        <h2>
          Description: {this.props.course.description}
        </h2>
        <h3>Students</h3>
        <ol>
          {this.props.course.students.map( student => <li key={student.id}>{student.name}</li>)}
        </ol>
        <h3>Assignments</h3>
        <ol>
          {this.props.course.assignments.map( assignment => <li key={assignment.id}>{assignment.title}</li>)}
        </ol>
        <button onClick={this.props.handleDelete(this.props.course.id)}>Delete</button>
      </div>
    )
  }
}

export default CourseShow;