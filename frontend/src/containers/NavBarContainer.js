import React, {Component} from "react"
import {Link} from 'react-router-dom'
import { connect } from "react-redux"
import "../styles/NavBarContainer.css"

class NavBar extends Component {

  linksToDisplay = [
        {name: "Dashboard", url: "/"},
        {name: "Catalog", url: "/courses"},
        {name: "Students", url: "/students"},
        {name: "Logout", url: "/logout"}
  ]

  render() {
    return (
      <div id="NavBarDiv">
        <ul className="NavBar">
          <li id='appTitle'>MyLMS</li>
          {this.linksToDisplay.map( ({url, name}) => {
            return (
              <Link to={url} key={name}><li>{name}</li></Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.usersReducer.loggedIn
  }
}

export default connect(mapStateToProps)(NavBar)