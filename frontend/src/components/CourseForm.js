import React, {Component} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { courseActions } from "../actions/courseActions";

class CourseForm extends Component {
  constructor() {
    super();
    this.state = {
      course: {
        title: "",
        description: "",
      },
      submitted: false,
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
    if (this.validate()) {
      this.props.addCourse(this.state.course)
      this.setState({
        submitted: true
      })
      // return <Redirect to="/courses"/>
      // this.setState({
      //   course: {
      //     title: "",
      //     description: ""
      //   }
      // })
    }
  }

  validate = () => {
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
      <div id="newCourseComponent">
        {this.state.submitted ? <Redirect to="/courses" /> : null }
        <form id="#newCourseForm" onSubmit={this.handleOnSubmit}>
          <h1>New course form</h1>
          <div id="errors-list">
            <ul>
              {this.state.errors.map( error => <li>{error}</li>)}
            </ul>
          </div>
          <p>
            Title:
            <input type="string" id="title" onChange={this.handleOnChange} value={this.state.course.title} />
          </p>
          <p>
            Description:
            <textarea id="description" onChange={this.handleOnChange} value={this.state.course.description} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (courseInfo) => dispatch(courseActions.addCourse(courseInfo))
  }
}

export default connect(null, mapDispatchToProps)(CourseForm)