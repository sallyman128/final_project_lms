import React from "react"
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <ul>
        <li id='appTitle'>MyLMS</li>
        {props.links.map( ({url, name}) => {
          return (
            <Link to={url} key={url}><li>{name}</li></Link>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBar