import React, {Component} from "react"
import {Link} from 'react-router-dom'
import './NavBar.css'
import isLoggedIn from "../helpers/isLoggedIn"

class NavBar extends Component {

  // isLoggedIn() {
  //   const token = localStorage.getItem("jwt")
  //   let loggedIn = false
  //   if (token !== null) {
  //     loggedIn = true;
  //   }
  //   return loggedIn
  // }

  linksToDisplay() {
    let linkstoDisplay = []
    if (isLoggedIn()) {
      linkstoDisplay = [
        {name: "Profile", url: "/"},
        {name: "Dashboard", url: "/dashboard"},
        {name: "Catalog", url: "/catalog"},
        {name: "Logout", url: "/logout"}
      ]
    } else {
      linkstoDisplay = [
        {name: "Home", url: '/'},
        {name: "Catalog", url: '/catalog'},
        {name: "Login", url: '/login'},
        {name: "Signup", url: '/signup'}
      ]
    }
    return linkstoDisplay
  }

  render() {
    return (
      <div className="NavBar">
      <ul>
        <li id='appTitle'>MyLMS</li>
        {this.linksToDisplay().map( ({url, name}) => {
          return (
            <Link to={url} key={url}><li>{name}</li></Link>
          )
        })}
      </ul>
    </div>
    )
  }
}

// const NavBar = (props) => {
//   return (
//     <div className="NavBar">
//       <ul>
//         <li id='appTitle'>MyLMS</li>
//         {props.links.map( ({url, name}) => {
//           return (
//             <Link to={url} key={url}><li>{name}</li></Link>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

export default NavBar