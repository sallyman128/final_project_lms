import React, {Component} from 'react'
import { connect } from 'react-redux'
import StudentsTable from '../components/StudentsTable'

class StudentsContainer extends Component {
  render() {
    return(
      <div>
        <h1>All Students</h1>
        <StudentsTable students={this.props.students}/>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.studentsReducer.students
  }
}

export default connect(mapStateToProps)(StudentsContainer)