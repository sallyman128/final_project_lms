import React from "react"
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li id='title'>MyLMS</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default NavBar