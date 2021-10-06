import React, {Component} from "react";
import { connect } from "react-redux";
import { courseActions } from "../actions/courseActions";

class CourseForm extends Component {
  constructor() {
    super();
    this.state = {
      course: {
        title: "",
        description: ""
      },
      errors: []
    }
  }

  handleOnChange = (e) => {
    this.setState( prevState => {
      return {
        course: {
          ...prevState.course,
          [e.target.id]: e.target.value
        }
      }
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state.course)
    this.setState({
      course: {
        title: "",
        description: ""
      }
    })
  }

  render() {
    return (
      <form id="#newCourseForm" onSubmit={this.handleOnSubmit}>
        <h1>New course form</h1>
        <p>
          Title:
          <input type="string" id="title" onChange={this.handleOnChange} value={this.state.title} />
        </p>
        <p>
          Description:
          <textarea id="description" onChange={this.handleOnChange} value={this.state.description} />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (courseInfo) => dispatch(courseActions.addCourse(courseInfo))
  }
}

export default connect(null, mapDispatchToProps)(CourseForm)