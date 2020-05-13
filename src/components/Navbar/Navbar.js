import React from "react";

import { Link } from "react-scroll";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import "./Navbar.scss";

class Navbar extends React.Component {
  state = {
    mobileMenuActive: false,
  };
  toggleMobileMenu = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
    });
  };
  render() {
    const barsClassName = this.state.mobileMenuActive ? "hidden" : "active";
    const closeClassName = this.state.mobileMenuActive ? "active" : "hidden";

    return (
      <nav>
        <FaBars className={"hamburger-icon " + barsClassName} onClick={this.toggleMobileMenu} />
        <FaTimesCircle
          className={"hamburger-icon " + closeClassName}
          onClick={this.toggleMobileMenu}
        />

        <ul className={"nav-links " + closeClassName}>
          <li>
            <Link
              to="about-section"
              smooth={true}
              offset={50}
              duration={500}
              onClick={this.toggleMobileMenu}
            >
              ABOUT ME
            </Link>
          </li>

          <li>
            <Link
              to="skills-section"
              smooth={true}
              offset={50}
              duration={500}
              onClick={this.toggleMobileMenu}
            >
              SKILLS
            </Link>
          </li>

          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
