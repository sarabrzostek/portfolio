import React from "react";

import "./Footer.scss";
import { FaGithub, FaLinkedinIn, FaFile } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import cv from "../../assets/zarzeczny_maciej_cv_eng.pdf";

function Footer() {
  return (
    <div className="footer">
      {/* <section className="links">
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
        <a href={cv} download>
          <FaFile className="link" data-for="link-tooltip" data-tip="Download resume" />
        </a>

        <ReactTooltip id="link-tooltip" place="top" effect="solid" />
      </section> */}

      <p>Sara Brzostek 2020</p>
    </div>
  );
}

export default Footer;
