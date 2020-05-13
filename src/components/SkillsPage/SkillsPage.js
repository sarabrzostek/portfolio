import React from "react";

import "./SkillsPage.scss";
import { FaChevronDown } from "react-icons/fa";
import HtmlIcon from "../../assets/icons/html5_icon.svg";
import ReduxIcon from "../../assets/icons/redux_logo.svg";
import JavascriptIcon from "../../assets/icons/javascript-1.svg";

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
      "Bootstrap 4",
    ],
    webIcons: [
      HtmlIcon,
      HtmlIcon,
      JavascriptIcon,
      HtmlIcon,
      ReduxIcon,
      HtmlIcon,
      HtmlIcon,
      HtmlIcon,
      HtmlIcon,
    ],

    mobileSkills: ["Flutter", "Firebase"],
    mobileIcons: [HtmlIcon, HtmlIcon],

    otherSkills: ["Git", "Terminal", "Adobe XD", "Adobe Photoshop"],
    otherIcons: [HtmlIcon, HtmlIcon, HtmlIcon, HtmlIcon],
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
              <h3>Web development</h3>
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
              <h3>Mobile development</h3>
              <FaChevronDown className="more-icon" />
            </div>
            <div className="card-content">{mobileSkills}</div>
          </div>

          <div id="other" className={"card " + this.state.otherCard} onClick={this.handleCardClick}>
            <div className="card-header">
              <h3>Other</h3>
              <FaChevronDown className="more-icon" />
            </div>
            <div className="card-content">{otherSkills}</div>
          </div>
        </div>

        <div id="projects-btn" className="button">
          See projects
        </div>
      </div>
    );
  }
}

export default SkillsPage;
