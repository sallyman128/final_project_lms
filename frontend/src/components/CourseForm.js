import React, {Component} from "react";
import { connect } from "react-redux";
import { courseActions } from "../actions/courseActions";

class CourseForm extends Component {
  constructor() {
    super();
    this.state = {
      course: {
        title: "",
        description: "",
        userId: ""
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
    if (this.valid()) {
      this.props.addCourse(this.state.course)
      this.setState({
        course: {
          title: "",
          description: ""
        }
      })
    }
  }

  valid = () => {
    let errors = []
    let valid = true

    if (this.state.course.title === "") {
      valid = false
      errors.push("Please enter a title.")
    }

    if (this.state.course.description === "") {
      valid = false
      errors.push("Please enter a description.")
    }

    this.setState({
      errors: errors
    })
    return valid
  }

  render() {
    return (
      <form id="#newCourseForm" onSubmit={this.handleOnSubmit}>
        <h1>New course form</h1>
        <div id="errors-list">
          <ul>
            {this.state.errors.map( error => <li>{error}</li>)}
          </ul>
        </div>
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

const mapStateToProps = (state) => {
  return {
    // currentUserId: state.use
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (courseInfo) => dispatch(courseActions.addCourse(courseInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)