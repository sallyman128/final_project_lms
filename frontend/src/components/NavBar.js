import React, {Component} from "react"
import {Link} from 'react-router-dom'
import './NavBar.css'
import { connect } from "react-redux"

class NavBar extends Component {

  linksToDisplay() {
    if (this.props.loggedIn) {
      return [
        {name: "Dashboard", url: "/"},
        {name: "Catalog", url: "/courses"},
        {name: "Students", url: "/students"},
        {name: "Logout", url: "/logout"}
      ]
    } else {
      return [
        {name: "Home", url: '/'},
        {name: "Catalog", url: '/courses'},
        {name: "Login", url: '/login'},
        {name: "Signup", url: '/signup'}
      ]
    }
  }

  render() {
    return (
      <div>
        <ul className="NavBar">
          <li id='appTitle'>MyLMS</li>
          {this.linksToDisplay().map( ({url, name}) => {
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