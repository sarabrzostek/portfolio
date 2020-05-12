import React from "react";

import { FaGithub, FaLinkedinIn, FaFile } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import "./LandingPage.scss";
import Navbar from "../Navbar/Navbar";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <section className="navbar">
          <Navbar />
        </section>

        <header>
          <h3>Maciej Zarzeczny</h3>
          <h1>Full stack developer</h1>
          <h1>Mobile developer</h1>
          <button>Learn more</button>
        </header>

        <section className="links">
          <a href="https://github.com/maciekz1996" target="_blank" rel="noopener noreferrer">
            <FaGithub className="link" data-for="link-tooltip" data-tip="GitHub page" />
          </a>
          <a
            href="https://www.linkedin.com/in/maciej-zarzeczny-03636918b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="link" data-for="link-tooltip" data-tip="Linkedin account" />
          </a>
          <FaFile className="link" data-for="link-tooltip" data-tip="Download resume" />

          <ReactTooltip id="link-tooltip" place="top" effect="solid" />
        </section>
      </div>
    );
  }
}

export default LandingPage;
