import React, {Component} from "react";
import NavBar from "../components/NavBar";

class NavBarContainer extends Component {

  isLoggedIn() {
    const token = localStorage.getItem("jwt")
    let loggedIn = false
    if (token !== "undefined") {
      loggedIn = true;
    }
    return loggedIn
  }

  navBarLinks() {
    let props = {}
    if (this.isLoggedIn()) {
      props = ["Home", "Dashboard", "Catalog", "Logout"]
    } else {
      props = ['Home', 'Catalog', 'Login']
    }
    return props;
  }

  render() {
    return (
      <div>
        <NavBar />
        {console.log(this.isLoggedIn())}
        {console.log(this.navBarLinks())}
      </div>      
    )
  }
}

export default NavBarContainer;