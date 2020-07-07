import React from "react";

import "./SkillsPage.scss";
import { FaChevronDown } from "react-icons/fa";
import HtmlIcon from "../../assets/icons/html.svg";
import CssIcon from "../../assets/icons/css.svg";
import XdIcon from "../../assets/icons/xd.svg";
import WordpressIcon from "../../assets/icons/wordpress.svg";
import AnimateIcon from "../../assets/icons/anim.svg";
import DimensionIcon from "../../assets/icons/dimension.svg";
import IlIcon from "../../assets/icons/il.svg";
import IndesignIcon from "../../assets/icons/indesign.svg";
import PsIcon from "../../assets/icons/ps.svg";
import PpIcon from "../../assets/icons/pp.svg";
import { Link } from "react-scroll";

class SkillsPage extends React.Component {
  state = {
    webCard: "",
    mobileCard: "",
    otherCard: "",

    adobeSkills: [
      "Photoshop",
      "XD",
      "Illustrator",
      "Animate",
      "InDesign",
      "Premiere Pro",
      "Dimension",
    ],
    adobeIcons: [PsIcon, XdIcon, IlIcon, AnimateIcon, IndesignIcon, PpIcon, DimensionIcon],

    otherSkills: ["Wordpress", "HTML5", "CSS3"],
    otherIcons: [WordpressIcon, HtmlIcon, CssIcon],
  };
  handleCardClick = (el) => {
    switch (el.currentTarget.id) {
      case "adobe":
        if (this.state.webCard === "") {
          this.setState({ webCard: "active", mobileCard: "", otherCard: "" });
        } else {
          this.setState({ webCard: "" });
        }
        break;

      case "other":
        if (this.state.otherCard === "") {
          this.setState({ otherCard: "active", webCard: "", mobileCard: "" });
        } else {
          this.setState({ otherCard: "" });
        }
        break;

      default:
        break;
    }
  };
  render() {
    const adobeSkills = this.state.adobeSkills.map((skill, i) => {
      return (
        <div className="skill" key={i}>
          <img src={this.state.adobeIcons[i]} alt="Adobe skill icon" className="skill-icon" />
          <span className="skill-description">{skill}</span>
        </div>
      );
    });

    const otherSkills = this.state.otherSkills.map((skill, i) => {
      return (
        <div className="skill" key={i}>
          <img src={this.state.otherIcons[i]} alt="Other skill icon" className="skill-icon" />
          <span className="skill-description">{skill}</span>
        </div>
      );
    });
    return (
      <div className="skills-page" name="skills-section">
        <h1 className="title">Skills</h1>

        <div className="cards">
          <div id="adobe" className={"card " + this.state.webCard} onClick={this.handleCardClick}>
            <div className="card-header">
              <h2>Adobe</h2>
              <FaChevronDown className="more-icon" />
            </div>
            <div className="card-content">{adobeSkills}</div>
          </div>

          <div id="other" className={"card " + this.state.otherCard} onClick={this.handleCardClick}>
            <div className="card-header">
              <h2>Other</h2>
              <FaChevronDown className="more-icon" />
            </div>
            <div className="card-content">{otherSkills}</div>
          </div>
        </div>

        <Link
          id="projects-btn"
          to="projects-section"
          smooth={true}
          duration={500}
          onClick={this.hideMobileMenu}
        >
          <div className="button">See projects</div>
        </Link>
        <svg
          id="skills-illustration"
          xmlns="http://www.w3.org/2000/svg"
          width="137.73"
          height="558.975"
          viewBox="0 0 137.73 558.975"
        >
          <g id="skills-illustration" transform="translate(0 0.005)">
            <rect
              id="Rectangle_192"
              data-name="Rectangle 192"
              width="20.67"
              height="258.46"
              transform="translate(72.14 289.99)"
              fill="#fac696"
            />
            <rect
              id="Rectangle_193"
              data-name="Rectangle 193"
              width="20.67"
              height="258.46"
              transform="translate(67.55 548.45) rotate(180)"
              fill="#fac696"
            />
            <rect
              id="Rectangle_194"
              data-name="Rectangle 194"
              width="11.35"
              height="120.55"
              transform="translate(15.23 196.13)"
              fill="#fac696"
            />
            <rect
              id="Rectangle_195"
              data-name="Rectangle 195"
              width="11.35"
              height="120.55"
              transform="translate(107.92 194.22)"
              fill="#fac696"
            />
            <g id="Me">
              <path
                id="Path_295"
                data-name="Path 295"
                d="M353.11,185.05v53.54c0,24.6-16.64,44.72-37,44.72H253.38c-20.35,0-37-20.12-37-44.72V185.05c0-33.06,16.28-61.74,39.63-74.93a59.531,59.531,0,0,1,17.77-6.63,56.191,56.191,0,0,1,18.59-.56h0a57.789,57.789,0,0,1,12.69,3.23,60.621,60.621,0,0,1,8.63,4.08h0A70.47,70.47,0,0,1,333,126.69q2.09,2.51,4,5.21C347,146.3,353.11,164.86,353.11,185.05Z"
                transform="translate(-215.88 -101.91)"
                fill="#3a2719"
                stroke="#a57e6e"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <rect
                id="Rectangle_196"
                data-name="Rectangle 196"
                width="15.27"
                height="31.26"
                rx="7.63"
                transform="translate(61.98 129.3)"
                fill="#f4b486"
                stroke="#f4b486"
                stroke-miterlimit="10"
                stroke-width="10"
              />
              <path
                id="Path_296"
                data-name="Path 296"
                d="M55.75,27.35H83.7a35.76,35.76,0,0,1,35.76,35.76V86.7a49.73,49.73,0,0,1-49.73,49.73h0A49.73,49.73,0,0,1,20,86.7V63.11A35.76,35.76,0,0,1,55.75,27.35Z"
                fill="#fac696"
              />
              <path
                id="Path_297"
                data-name="Path 297"
                d="M254,174.39a9,9,0,0,1,18,0"
                transform="translate(-215.88 -101.91)"
                fill="#fac696"
                stroke="#885543"
                stroke-miterlimit="10"
                stroke-width="10"
              />
              <path
                id="Path_298"
                data-name="Path 298"
                d="M299,174.11a9,9,0,1,1,18,0"
                transform="translate(-215.88 -101.91)"
                fill="#fac696"
                stroke="#885543"
                stroke-miterlimit="10"
                stroke-width="10"
              />
              <circle
                id="Ellipse_46"
                data-name="Ellipse 46"
                cx="4.66"
                cy="4.66"
                r="4.66"
                transform="translate(27.56 81.89)"
                fill="#e8a17b"
                stroke="#e8a17b"
                stroke-miterlimit="10"
                stroke-width="10"
              />
              <circle
                id="Ellipse_47"
                data-name="Ellipse 47"
                cx="4.66"
                cy="4.66"
                r="4.66"
                transform="translate(102.47 81.89)"
                fill="#e8a17b"
                stroke="#e8a17b"
                stroke-miterlimit="10"
                stroke-width="10"
              />
              <path
                id="Path_299"
                data-name="Path 299"
                d="M305.06,105.51a68.26,68.26,0,0,0-12.69-2.67h0a5.48,5.48,0,0,0-1.56,1.07c-3.89,3.89-1,13.72,6.7,25.65A157.828,157.828,0,0,0,318.4,155c12.26,12.26,24.88,21.53,34.71,26.12v-10.3a68,68,0,0,0-16.11-44,142.711,142.711,0,0,0-23.28-17.91h0Z"
                transform="translate(-215.88 -101.91)"
                fill="#3a2718"
              />
              <path
                id="Path_300"
                data-name="Path 300"
                d="M311,115.55c0,5.9-5.37,11.08-13.44,14a47.15,47.15,0,0,1-31.19-.23c-7.73-3-12.82-8-12.82-13.78a10.89,10.89,0,0,1,2.51-6.76,67.863,67.863,0,0,1,36.36-5.95h0a68.261,68.261,0,0,1,12.69,2.67C308.75,108.3,311,111.78,311,115.55Z"
                transform="translate(-215.88 -101.91)"
                fill="#3a2718"
              />
              <path
                id="Path_301"
                data-name="Path 301"
                d="M266.32,129.33a161.281,161.281,0,0,1-17.91,24.77c-11.06,12.75-22.67,22.7-32,28.08v-11.4a68.59,68.59,0,0,1,39.63-62,67.729,67.729,0,0,1,17.77-5.49C275.83,108.23,272.9,117.87,266.32,129.33Z"
                transform="translate(-215.88 -101.91)"
                fill="#3a2718"
              />
              <rect
                id="Rectangle_197"
                data-name="Rectangle 197"
                width="2.21"
                height="9.33"
                rx="1.105"
                transform="translate(69.62 88.41)"
                fill="#f4b486"
                stroke="#f4b486"
                stroke-miterlimit="10"
                stroke-width="10"
              />
              <path
                id="Path_302"
                data-name="Path 302"
                d="M275.19,244.16l20.45,4.94V237.32s-11,2.28-20.45.17"
                transform="translate(-215.88 -101.91)"
                fill="#d69b73"
              />
            </g>
            <path
              id="Path_303"
              data-name="Path 303"
              d="M226.95,268.13h3.28a26.36,26.36,0,0,1,26.36,26.36v3.28H226.95Z"
              transform="translate(-257.07 422.8) rotate(-90)"
              fill="#fff"
            />
            <rect
              id="Rectangle_198"
              data-name="Rectangle 198"
              width="29.78"
              height="3.25"
              transform="translate(8.93 193.07)"
              fill="#283368"
            />
            <path
              id="Path_304"
              data-name="Path 304"
              d="M96.56,165.6h3.28A26.36,26.36,0,0,1,126.2,192v6.53H96.56Z"
              fill="#fff"
            />
            <path
              id="Smile"
              d="M297.93,209.49c0,7.69-5.6,13.92-12.51,13.92s-12.51-6.23-12.51-13.92"
              transform="translate(-215.88 -101.91)"
              fill="#fff"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="10"
            />
            <path
              id="Path_305"
              data-name="Path 305"
              d="M52.31,157.88H84.25a19.58,19.58,0,0,1,19.58,19.58V214H32.73V177.45a19.58,19.58,0,0,1,19.58-19.57Z"
              fill="#283368"
            />
            <rect
              id="Rectangle_199"
              data-name="Rectangle 199"
              width="46.38"
              height="10.64"
              transform="translate(44.81 149.02)"
              fill="#fff"
            />
            <path
              id="Path_306"
              data-name="Path 306"
              d="M55,202.36H81a36.07,36.07,0,0,1,36.07,36.07v64.89H18.93V238.43A36.07,36.07,0,0,1,55,202.36Z"
              fill="#283368"
            />
            <path
              id="Path_307"
              data-name="Path 307"
              d="M36.26,202.36h64a3.53,3.53,0,0,1,3.53,3.53v4.62H32.73v-4.62A3.53,3.53,0,0,1,36.26,202.36Z"
              fill="#fff"
            />
            <rect
              id="Rectangle_200"
              data-name="Rectangle 200"
              width="29.78"
              height="3.25"
              transform="translate(93.21 195.24)"
              fill="#283368"
            />
            <rect
              id="Rectangle_201"
              data-name="Rectangle 201"
              width="20.67"
              height="16.34"
              transform="translate(72.14 303.32)"
              fill="#fab178"
            />
            <rect
              id="Rectangle_202"
              data-name="Rectangle 202"
              width="20.67"
              height="184.46"
              transform="translate(72.14 363.99)"
              fill="#283368"
            />
            <path
              id="Path_308"
              data-name="Path 308"
              d="M72.14,548.45h36.65a2.63,2.63,0,0,1,2.63,2.63v5.26a2.63,2.63,0,0,1-2.63,2.63H72.14Z"
              fill="#283368"
            />
            <rect
              id="Rectangle_203"
              data-name="Rectangle 203"
              width="20.67"
              height="16.34"
              transform="translate(67.55 319.65) rotate(180)"
              fill="#fab178"
            />
            <rect
              id="Rectangle_204"
              data-name="Rectangle 204"
              width="20.67"
              height="184.46"
              transform="translate(67.55 548.45) rotate(180)"
              fill="#283368"
            />
            <path
              id="Path_309"
              data-name="Path 309"
              d="M244.16,650.36H280.8a2.63,2.63,0,0,1,2.63,2.63v5.26a2.63,2.63,0,0,1-2.63,2.63H244.16Z"
              transform="translate(311.7 1209.32) rotate(180)"
              fill="#283368"
            />
            <circle
              id="Ellipse_48"
              data-name="Ellipse 48"
              cx="10.58"
              cy="10.58"
              r="10.58"
              transform="translate(10.33 307.51)"
              fill="#fac696"
            />
            <circle
              id="Ellipse_49"
              data-name="Ellipse 49"
              cx="10.58"
              cy="10.58"
              r="10.58"
              transform="translate(103.02 307.51)"
              fill="#fac696"
            />
            <line
              id="Line_1"
              data-name="Line 1"
              y2="86.77"
              transform="translate(109.12 216.55)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              y2="92.86"
              transform="translate(96.38 210.51)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              y2="92.86"
              transform="translate(83.36 210.51)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_4"
              data-name="Line 4"
              y2="106.83"
              transform="translate(68.91 209.77)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              y2="92.81"
              transform="translate(55.6 210.51)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              y2="92.81"
              transform="translate(42.43 210.51)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              y2="91.27"
              transform="translate(30.41 212.05)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_8"
              data-name="Line 8"
              x1="97.45"
              transform="translate(18.93 300.83)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_9"
              data-name="Line 9"
              x1="97.19"
              transform="translate(19.19 288.09)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_10"
              data-name="Line 10"
              x1="97.19"
              transform="translate(19.19 275.07)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              x1="98.18"
              transform="translate(18.93 260.62)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_12"
              data-name="Line 12"
              x1="97.45"
              transform="translate(18.93 247.31)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_13"
              data-name="Line 13"
              x1="97.19"
              transform="translate(19.19 234.14)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <line
              id="Line_14"
              data-name="Line 14"
              x1="89.6"
              transform="translate(23.57 222.12)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default SkillsPage;
