import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home.js'
import NoRoute from './components/NoRoute.js'

import NavBarContainer from './containers/NavBarContainer.js'
import DashboardContainer from './containers/DashboardContainer.js'
import CatalogContainer from './containers/CatalogContainer.js'
import CourseShowContainer from './containers/CourseShowContainer.js'

function App() {
  return (
    <Router>
      <NavBarContainer />

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
        <Route>
          <NoRoute/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
