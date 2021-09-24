import React from 'react'
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home.js'
import Dashboard from './components/Dashboard.js'
import Catalog from './components/Catalog.js'
import NoRoute from './components/NoRoute.js'

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path='/catalog'>
          <Catalog />
        </Route>
        <Route>
          <NoRoute/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
