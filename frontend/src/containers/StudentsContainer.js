import React, {Component} from 'react'
import { connect } from 'react-redux'
import StudentsTable from '../components/StudentsTable'

class StudentsContainer extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  getStudents = () => {
    this.setState( {
      students: this.props.students
    })
  }

  searchStudents = () => {
    const search = document.getElementById('studentSearchWord').value
    let students =[]

    if (search === "") {
      students = this.props.students
    } else {
      students = this.props.students.filter(student => student.name.toLowerCase().includes(search) )
    }
    
    this.setState({
      students: students
    })
  }

  componentDidMount = () => {
    this.getStudents()
  }

  render() {
    return(
      <div>
        <h1>All Students</h1>
        <input type='text' id='studentSearchWord'/>
        <button id='studentSearchButton' onClick={() => this.searchStudents()}>Search</button>
        <StudentsTable students={this.state.students}/>  
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