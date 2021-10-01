import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/Home.js'
import NoRoute from './components/NoRoute.js'
import NavBar from './components/NavBar.js'

import SignUp from './components/SignUp.js'

import DashboardContainer from './containers/DashboardContainer.js'
import CatalogContainer from './containers/CatalogContainer.js'
import CourseShowContainer from './containers/CourseShowContainer.js'
import LoginContainer from './containers/LoginContainer.js'
import { fetchCourses } from './actions/courseActions.js'

import isLoggedIn from './helpers/isLoggedIn.js'
import CourseShow from './components/CourseShow.js'

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     isLoggedIn: true,
  //     user: {}
  //   }
  // }

  // handleLogOut() {
  //   localStorage.clear();
  //   this.setState({
  //     isLoggedIn: false
  //   })
  // }
  
  componentDidMount() {
    console.log("App succesfully mounted")
    this.props.getCourses()
  }

  render() {
    return (
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path="/dashboard" render={() => <DashboardContainer />} />
          <Route exact path="/catalog" render={() => <CatalogContainer />} />
          <Route path="/catalog/:id" render={() => <CourseShowContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route exact path='/signup' render={() => isLoggedIn() ? <Redirect to="/" /> : <SignUp />} />
          <Route render={() => <NoRoute />} />
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => dispatch(fetchCourses())
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
