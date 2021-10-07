import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/Home.js'
import NoRoute from './components/NoRoute.js'
import NavBar from './containers/NavBarContainer.js'

import SignUp from './components/SignUp.js'
import Logout from './components/Logout.js'

import Dashboard from './containers/DashboardContainer.js'
import Catalog from './containers/CatalogContainer.js'
import CourseShow from './containers/CourseShowContainer.js'
import Login from './containers/LoginContainer.js'
import { courseActions } from './actions/courseActions.js'
import NewCourseForm from './components/NewCourseForm.js'
import { userActions } from './actions/userActions.js'
import StudentsIndex from './containers/StudentsContainer.js'

import "./App.css"

class App extends Component {
  
  componentDidMount() {
    console.log("App succesfully mounted")
    this.props.logout()
    this.props.getCourses()
  }

  render() {
    return (
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/' render={() => this.props.loggedIn ? <Dashboard /> : <Home />} />
          <Route exact path="/courses" render={() => <Catalog />} />
          <Route path="/courses/new" render={() => this.props.loggedIn ? <NewCourseForm /> : <Redirect to="/courses" />} />
          <Route path="/courses/:id" render={({match}) => <CourseShow match={match} />} />
          <Route exact path='/login' render={() => this.props.loggedIn ? <Redirect to="/" /> : <Login />} />
          <Route exact path='/signup' render={() => this.props.loggedIn ? <Redirect to="/" /> : <SignUp />} />
          <Route exact path="/logout" render={() => this.props.loggedIn ? <Logout /> : <Redirect to="/" />} />
          <Route exact path="/students" render={() => this.props.loggedIn ? <StudentsIndex /> : <Redirect to="/"/>} />
          <Route render={() => <NoRoute />} />
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => dispatch(courseActions.fetchCourses()),
    logout: () => dispatch(userActions.logout())
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.coursesReducer.courses,
    loggedIn: state.usersReducer.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
