import React from "react";

import "./Navbar.scss";
import { Link } from "react-scroll";
import { FaBars, FaTimesCircle, FaGithub, FaLinkedinIn, FaFile } from "react-icons/fa";
import Toggle from "../Toggle/Toggle";

class Navbar extends React.Component {
  state = {
    mobileMenuActive: false,
    showMinifiedMenu: false,
    hamburgerClass: "",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY >= 100 && !this.state.showMinifiedMenu) {
      this.setState({
        showMinifiedMenu: true,
      });
      setTimeout(() => {
        this.setState({
          hamburgerClass: "animate",
        });
      }, 10);
      setTimeout(() => {
        this.setState({
          hamburgerClass: "",
        });
      }, 2000);
    } else if (window.scrollY < 100 && this.state.showMinifiedMenu) {
      this.setState({
        showMinifiedMenu: false,
      });
    }
  };
  showMobileMenu = () => {
    this.setState({
      mobileMenuActive: true,
    });
  };
  hideMobileMenu = () => {
    this.setState({
      mobileMenuActive: false,
    });
  };
  render() {
    const { handleThemeChange, darkTheme } = this.props;

    const barsClassName = this.state.mobileMenuActive ? "hidden" : "active";
    const closeClassName = this.state.mobileMenuActive ? "active" : "hidden";
    const mobileClass = this.state.showMinifiedMenu ? "mobile" : "";

    return (
      <nav className={mobileClass}>
        <Toggle handleThemeChange={handleThemeChange} darkTheme={darkTheme} />

        <FaBars
          className={
            "hamburger-icon " + barsClassName + " " + this.state.hamburgerClass + " " + mobileClass
          }
          onClick={this.showMobileMenu}
        />
        <FaTimesCircle
          className={"hamburger-icon " + closeClassName}
          onClick={this.hideMobileMenu}
        />

        <ul className={"nav-links " + closeClassName}>
          <li>
            <Link to="about-section" smooth={true} duration={500} onClick={this.hideMobileMenu}>
              ABOUT ME
            </Link>
          </li>

          <li>
            <Link to="skills-section" smooth={true} duration={500} onClick={this.hideMobileMenu}>
              SKILLS
            </Link>
          </li>

          <li>
            <Link to="projects-section" smooth={true} duration={500} onClick={this.hideMobileMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="contact-section" smooth={true} duration={500} onClick={this.hideMobileMenu}>
              CONTACT
            </Link>
          </li>
          <li>
            <a href="https://github.com/maciekz1996" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maciej-zarzeczny-03636918b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#!">
              <FaFile />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
