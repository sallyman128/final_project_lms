import React from "react"
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li id='title'>MyLMS</li>
        <li><a>Home</a></li>
        <li><a>Dashboard</a></li>
        <li><a>Courses</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  )
}

export default NavBar