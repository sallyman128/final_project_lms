import React, {Component} from "react";
import NavBar from "../components/NavBar";

class NavBarContainer extends Component {

  isLoggedIn() {
    const token = localStorage.getItem("jwt")
    let loggedIn = false
    if (token !== null) {
      loggedIn = true;
    }
    return loggedIn
  }

  navBarLinks() {
    let linksToShow = {};
    if (this.isLoggedIn()) {
      linksToShow = [
        {name: "Home", url: "/"},
        {name: "Catalog", url: "/catalog"},
        {name: "Dashboard", url: "/dashboard"},
        {name: "Logout", url: "/logout"}
      ]
    } else {
      linksToShow = [
        {name: "Home", url: '/'},
        {name: "Catalog", url: '/catalog'},
        {name: "Login", url: '/login'}
      ]
    }
    return linksToShow;
  }

  render() {
    return (
      <div>
        <NavBar links={this.navBarLinks()}/>
        {console.log("Logged In? ", this.isLoggedIn())}
      </div>
    )
  }
}

export default NavBarContainer;