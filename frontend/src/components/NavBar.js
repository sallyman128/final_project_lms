import React from "react"
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li id='title'>MyLMS</li>
        <Link to="/"><li >Home</li></Link>
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/catalog"><li>Catalog</li></Link>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default NavBar