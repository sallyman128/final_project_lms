import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/Home.js'
import NoRoute from './components/NoRoute.js'
import NavBar from './components/NavBar.js'

import DashboardContainer from './containers/DashboardContainer.js'
import CatalogContainer from './containers/CatalogContainer.js'
import CourseShowContainer from './containers/CourseShowContainer.js'
import LoginContainer from './containers/LoginContainer.js'
import { fetchCourses } from './actions/courseActions.js'

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
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/dashboard">
            <DashboardContainer />
          </Route>
          <Route exact path= '/catalog'>
            <CatalogContainer/>
          </Route>
          <Route path='/catalog/:id'>
            <CourseShowContainer />
          </Route>
          <Route path='/login'>
            <LoginContainer />
          </Route>
          <Route>
            <NoRoute/>
          </Route>
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
