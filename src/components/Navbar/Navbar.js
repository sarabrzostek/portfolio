import React from "react";

import { FaBars, FaTimesCircle } from "react-icons/fa";
import "./Navbar.scss";

class Navbar extends React.Component {
  state = {
    mobileMenuActive: false,
  };
  // handleMobileMenu = () => {
  //   var menu = document.getElementsByClassName("nav-links")[0];
  //   menu.classList.toggle("active");
  // };
  showMobileMenu = () => {
    var menu = document.getElementsByClassName("nav-links")[0];
    menu.classList.add("active");
    this.setState({
      mobileMenuActive: true,
    });
  };
  hideMobileMenu = () => {
    var menu = document.getElementsByClassName("nav-links")[0];
    menu.classList.remove("active");
    this.setState({
      mobileMenuActive: false,
    });
  };
  render() {
    const barsClassName = this.state.mobileMenuActive ? "hidden" : "active";
    const closeClassName = this.state.mobileMenuActive ? "active" : "hidden";

    return (
      <nav>
        <FaBars className={"hamburger-icon " + barsClassName} onClick={this.showMobileMenu} />
        <FaTimesCircle
          className={"hamburger-icon " + closeClassName}
          onClick={this.hideMobileMenu}
        />

        <ul className="nav-links">
          <li>ABOUT ME</li>
          <li>SKILLS</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
