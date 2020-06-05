import React from "react";

import "./SkillsPage.scss";
import { FaChevronDown } from "react-icons/fa";
import HtmlIcon from "../../assets/icons/html5_icon.svg";
import ReduxIcon from "../../assets/icons/redux_logo.svg";
import JavascriptIcon from "../../assets/icons/javascript-1.svg";
import ReactIcon from "../../assets/icons/react-brands.svg";
import CssIcon from "../../assets/icons/css3.svg";
import LaravelIcon from "../../assets/icons/laravel-brands.svg";
import MySqlIcon from "../../assets/icons/mysql.svg";
import MaterializeIcon from "../../assets/icons/materialize.svg";
import FlutterIcon from "../../assets/icons/flutter.svg";
import FirebaseIcon from "../../assets/icons/firebase.svg";
import GitIcon from "../../assets/icons/git.svg";
import XdIcon from "../../assets/icons/xd.svg";
import PhotoshopIcon from "../../assets/icons/photoshop.svg";
import { Link } from "react-scroll";

class SkillsPage extends React.Component {
  state = {
    webCard: "",
    mobileCard: "",
    otherCard: "",
    webSkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Laravel",
      "MySQL",
      "Materialize css",
    ],
    webIcons: [
      HtmlIcon,
      CssIcon,
      JavascriptIcon,
      ReactIcon,
      ReduxIcon,
      LaravelIcon,
      MySqlIcon,
      MaterializeIcon,
    ],

    mobileSkills: ["Flutter", "Firebase"],
    mobileIcons: [FlutterIcon, FirebaseIcon],

    otherSkills: ["Git", "Adobe XD", "Adobe Photoshop"],
    otherIcons: [GitIcon, XdIcon, PhotoshopIcon],
  };
  handleCardClick = (el) => {
    switch (el.currentTarget.id) {
      case "web":
        if (this.state.webCard === "") {
          this.setState({ webCard: "active", mobileCard: "", otherCard: "" });
        } else {
          this.setState({ webCard: "" });
        }
        break;

      case "mobile":
        if (this.state.mobileCard === "") {
          this.setState({ mobileCard: "active", webCard: "", otherCard: "" });
        } else {
          this.setState({ mobileCard: "" });
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
    const webSkills = this.state.webSkills.map((skill, i) => {
      return (
        <div className="skill" key={i}>
          <img src={this.state.webIcons[i]} alt="Web skill icon" className="skill-icon" />
          <span className="skill-description">{skill}</span>
        </div>
      );
    });

    const mobileSkills = this.state.mobileSkills.map((skill, i) => {
      return (
        <div className="skill" key={i}>
          <img src={this.state.mobileIcons[i]} alt="Mobile skill icon" className="skill-icon" />
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
          <div id="web" className={"card " + this.state.webCard} onClick={this.handleCardClick}>
            <div className="card-header">
              <h2>Web development</h2>
              <FaChevronDown className="more-icon" />
            </div>
            <div className="card-content">{webSkills}</div>
          </div>

          <div
            id="mobile"
            className={"card " + this.state.mobileCard}
            onClick={this.handleCardClick}
          >
            <div className="card-header">
              <h2>Mobile development</h2>
              <FaChevronDown className="more-icon" />
            </div>
            <div className="card-content">{mobileSkills}</div>
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
          width="321.395"
          height="258.302"
          viewBox="0 0 321.395 258.302"
        >
          <rect
            id="Rectangle_124"
            data-name="Rectangle 124"
            width="321.395"
            height="0.747"
            transform="translate(0 240.01)"
            fill="#3f3d56"
          />
          <g id="man">
            <path
              id="Path_210"
              data-name="Path 210"
              d="M704.337,398.628s-14.416,11.327-7.208,13.9,11.842-9.267,11.842-9.267Z"
              transform="translate(-502.687 -286.613)"
              fill="#ffb8b8"
            />
            <path
              id="Path_212"
              data-name="Path 212"
              d="M794.892,675.375l.515,15.445-6.178,3.6-2.574-1.544.515-17.5Z"
              transform="translate(-524.253 -450.092)"
              fill="#ffb8b8"
            />
            <path
              id="Path_213"
              data-name="Path 213"
              d="M793.265,725.845l1.03,16.475L779.878,748.5l1.03-8.752s4.119-6.693,3.089-13.9Z"
              transform="translate(-559.179 -504.681)"
              fill="#ffb8b8"
            />
            <path
              id="Path_214"
              data-name="Path 214"
              d="M804.088,353.868s8.238,21.624,9.782,35.01,4.119,48.911,4.119,48.911l5.149,45.822-14.416,2.059-6.178-46.337-13.9-45.822-3.089,45.822-2.574,41.7-13.386.515-1.03-43.248L762.9,383.214l3.089-26.257Z"
              transform="translate(-547.865 -256.783)"
              fill="#2f2e41"
            />
            <path
              id="Path_215"
              data-name="Path 215"
              d="M905.416,777.036s.844-8.647,7.115-3.809l1.122-.825,5.149,11.327s6.178,8.753-4.634,9.782-9.782-9.782-9.782-9.782l-1.03-4.634.515-3.034Z"
              transform="translate(-641.469 -535.278)"
              fill="#2f2e41"
            />
            <path
              id="Path_216"
              data-name="Path 216"
              d="M758.291,756.714a8.179,8.179,0,0,1,4.119,7.208c0,5.149-.515,5.663-.515,5.663l-7.723,2.059s-5.148-.515-8.238,2.574-18.535,5.148-18.535,1.03,12.871-10.812,12.871-10.812,3.822-6.455,6.545-5.8,3.752,1.683,3.752,2.2a35.474,35.474,0,0,1-1.545,4.119S757.777,762.892,758.291,756.714Z"
              transform="translate(-524.206 -525.253)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_30"
              data-name="Ellipse 30"
              cx="12.871"
              cy="12.871"
              r="12.871"
              transform="translate(220.184 8.015)"
              fill="#ffb8b8"
            />
            <path
              id="Path_217"
              data-name="Path 217"
              d="M816.953,135.466l5.663,12.871-15.446,22.139s-1.03-24.2-4.119-28.317S816.953,135.466,816.953,135.466Z"
              transform="translate(-574.373 -111.233)"
              fill="#ffb8b8"
            />
            <path
              id="Path_218"
              data-name="Path 218"
              d="M667.563,113.821l2.575-6.693,2.059.515,2.574-2.059,3.6-11.327,5.149,3.6,6.693,67.446-41.7,1.03,5.663-46.851,5.149-13.386,3.716-4.913,2.462,7.487Z"
              transform="translate(-432.191 -62.816)"
              fill="#cfcce0"
            />
            <path
              id="Path_219"
              data-name="Path 219"
              d="M859.367,209.114l1.575-46.572s3.058.236,4.088,1.78,18.02,4.634,18.02,4.634l-3.089,47.881s12.871,38.1,8.238,40.158-12.871,1.545-12.871,1.545Z"
              transform="translate(-612.153 -129.277)"
              fill="#575a89"
            />
            <path
              id="Path_220"
              data-name="Path 220"
              d="M757.588,221.7l5.462-31.388-12.155,8.22,3.089,22.653-2.574,15.446s-9.782,42.733-6.693,44.277,6.693,0,6.693,0l6.178-43.248Z"
              transform="translate(-535.345 -147.785)"
              fill="#575a89"
            />
            <path
              id="Path_221"
              data-name="Path 221"
              d="M735.132,211.868l-3.6,1.03-1.545,20.594-2.574,18.02L715.052,273.65s6.178-4.119,8.752,7.723l13.608-23.692Z"
              transform="translate(-515.977 -162.15)"
              fill="#575a89"
            />
            <path
              id="Path_222"
              data-name="Path 222"
              d="M877.206,386.28s-14.416,11.327-7.208,13.9,11.842-9.267,11.842-9.267Z"
              transform="translate(-617.893 -278.384)"
              fill="#ffb8b8"
            />
            <path
              id="Path_224"
              data-name="Path 224"
              d="M899.247,183.058,903.366,181s3.089,4.119,3.6,7.723,3.089,8.238,3.089,10.812,7.208,26.772,7.208,26.772l-16.475,33.465s-3.6-12.356-11.327-13.386l12.871-18.02-7.208-12.871Z"
              transform="translate(-632.212 -141.577)"
              fill="#575a89"
            />
            <path
              id="Path_225"
              data-name="Path 225"
              d="M791.328,71.441l2.427-.972s-5.075-5.587-12.136-5.1l1.986-2.186s-4.854-1.943-9.267,3.158a43.073,43.073,0,0,0-6.677,9.385h-2.6l1.085,2.389-3.8,2.389,3.9-.429a13.347,13.347,0,0,0-.106,3.962,5.126,5.126,0,0,0,1.877,3.354h0s3.01-6.231,3.01-7.2v2.429s2.427-2.186,2.427-3.644l1.324,1.7L775.441,78l8.164,2.672-1.324-2.186,5.075.729-1.986-2.672s5.737,3.158,5.958,5.83a12.831,12.831,0,0,0,1.9,5.2S797.727,75.085,791.328,71.441Z"
              transform="translate(-547.497 -62.818)"
              fill="#2f2e41"
            />
            <path
              id="Path_211"
              data-name="Path 211"
              d="M718.142,386.28l-3.089,5.149s5.148,0,6.178,7.723L725.35,394Z"
              transform="translate(-515.977 -278.384)"
              fill="#cfcce0"
            />
            <ellipse
              id="Ellipse_31"
              data-name="Ellipse 31"
              cx="1.442"
              cy="1.802"
              rx="1.442"
              ry="1.802"
              transform="translate(242.168 17.025)"
              fill="#ffb8b8"
            />
            <path
              id="Path_223"
              data-name="Path 223"
              d="M782.032,320.9,777.4,326.56l-6.178-10.812,2.574-4.634Z"
              transform="translate(-513.966 -207.337)"
              fill="#cfcce0"
            />
          </g>
          <g id="tasks" transform="translate(-13 -5)">
            <g id="task3">
              <path
                id="Path_230"
                data-name="Path 230"
                d="M89.805,466.009H45.361V453.555h23.2Z"
                transform="translate(-30.23 -302.264)"
                fill="#97dffc"
              />
              <path
                id="Path_231"
                data-name="Path 231"
                d="M163.24,546.388v36.386H307.563V546.388Zm83.395,30.281H172.642v-5.128h73.993Zm0-9.524H172.642v-5.128h73.993Zm51.526-9.524H172.642v-5.128H298.161Z"
                transform="translate(-148.231 -385.085)"
                fill="#3f3d56"
              />
            </g>
            <g id="task2">
              <path
                id="Path_226"
                data-name="Path 226"
                d="M89.805,293.236H45.361V280.782h23.2Z"
                transform="translate(-30.23 -187.122)"
                fill="#97dffc"
              />
              <path
                id="Path_227"
                data-name="Path 227"
                d="M163.24,375.811V412.2H307.563V375.811Zm56.288,30.281H172.642v-5.128h46.887Zm78.633-9.524H172.642V391.44H298.161Zm0-9.524H172.642v-5.128H298.161Z"
                transform="translate(-148.231 -271.407)"
                fill="#3f3d56"
              />
            </g>
            <g id="task1">
              <path
                id="Path_228"
                data-name="Path 228"
                d="M89.805,116.8H45.361V104.348h23.2Z"
                transform="translate(-30.23 -69.541)"
                fill="#97dffc"
              />
              <path
                id="Path_229"
                data-name="Path 229"
                d="M163.24,201.574V237.96H307.563V201.574Zm56.288,30.281H172.642v-5.128h46.887Zm27.106-9.524H172.642V217.2h73.993Zm51.526-9.524H172.642v-5.128H298.161Z"
                transform="translate(-148.231 -155.29)"
                fill="#3f3d56"
              />
            </g>
            <path
              id="Path_232"
              data-name="Path 232"
              d="M559.3,182.7H538.789V162.183h13.92v.488H539.278v19.536h19.536V172.44h.488Z"
              transform="translate(-359.067 -108.084)"
              fill="#3f3d56"
            />
            <path
              id="Path_234"
              data-name="Path 234"
              d="M559.3,356.933H538.789V336.42h13.92v.489H539.278v19.536h19.536v-9.768h.488Z"
              transform="translate(-359.067 -224.201)"
              fill="#3f3d56"
            />
            <path
              id="Path_236"
              data-name="Path 236"
              d="M559.3,530.439H538.789V509.926h13.92v.488H539.278V529.95h19.536v-9.768h.488Z"
              transform="translate(-359.067 -339.831)"
              fill="#3f3d56"
            />
            <g id="tick3">
              <path
                id="Path_237"
                data-name="Path 237"
                d="M679.572,584.818c-.474-1.4-6.419-6.158-2.776-6.957l2.987,3.983,13.734-13.733,1.381,1.381Z"
                transform="translate(-489.699 -399.562)"
                fill="#97dffc"
              />
            </g>
            <g id="tick2">
              <path
                id="Path_235"
                data-name="Path 235"
                d="M679.572,411.313c-.474-1.4-6.419-6.158-2.776-6.957l2.987,3.983,13.734-13.733,1.381,1.381Z"
                transform="translate(-489.699 -283.932)"
                fill="#97dffc"
              />
            </g>
            <g id="tick1">
              <path
                id="Path_233"
                data-name="Path 233"
                d="M679.572,237.076c-.474-1.4-6.419-6.158-2.776-6.957l2.987,3.983,13.734-13.733,1.381,1.381Z"
                transform="translate(-489.699 -167.815)"
                fill="#97dffc"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default SkillsPage;
