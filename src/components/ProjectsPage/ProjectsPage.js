import React from "react";

import "./ProjectsPage.scss";
import JavascriptIcon from "../../assets/icons/javascript-1.svg";
import ReactIcon from "../../assets/icons/react-brands.svg";
import ReduxIcon from "../../assets/icons/redux_logo.svg";
import FirebaseIcon from "../../assets/icons/firebase.svg";
import FlutterIcon from "../../assets/icons/flutter.svg";
import LaravelIcon from "../../assets/icons/laravel-brands.svg";
import VueIcon from "../../assets/icons/vue.svg";
import GyminoImage from "../../assets/images/gymino-app.png";
import GyminoDashboardImage from "../../assets/images/gymino-dashboard.png";
import SortingImage from "../../assets/images/sorting-visualizer.png";
import ScudettoImage from "../../assets/images/scudetto.png";

class ProjectsPage extends React.Component {
  state = {
    projects: [
      {
        name: "Sorting visualizer",
        icons: [JavascriptIcon, ReactIcon],
        codeUrl: "https://github.com/maciekz1996/sorting-visualizer",
        image: SortingImage,
      },
      {
        name: "Gymino dashboard",
        icons: [JavascriptIcon, ReactIcon, ReduxIcon, FirebaseIcon],
        codeUrl: "https://github.com/maciekz1996/sqilly-web-app",
        image: GyminoDashboardImage,
      },
      {
        name: "Gymino mobile app",
        icons: [FlutterIcon, FirebaseIcon],
        codeUrl: "https://github.com/maciekz1996/sqilly",
        image: GyminoImage,
      },
      {
        name: "Scudetto store",
        icons: [LaravelIcon, VueIcon],
        codeUrl: "https://github.com/maciekz1996/sqilly",
        image: ScudettoImage,
      },
    ],
  };
  render() {
    const projects = this.state.projects.map((project, i) => {
      const icons = project.icons.map((icon, i) => {
        return (
          <img
            src={icon}
            key={i}
            className="technology-icon"
            alt={"Technology used to create " + project.name}
          />
        );
      });
      return (
        <div className="project-card" key={i}>
          <img src={project.image} className="project-image" alt={project.name} />
          <div className="details">
            <h2 className="project-name">{project.name}</h2>
            {icons}
          </div>
          <div className="project-card-overflow">
            <a href={project.codeUrl} className="button" target="_blank" rel="noopener noreferrer">
              See details
            </a>
          </div>
        </div>
      );
    });

    return (
      <div className="projects-page" name="projects-section">
        <h1 className="title">Recent projects</h1>
        <section className="projects">{projects}</section>
        {/* {this.state.projects.length > 3 && <div className="button">See all</div>} */}
      </div>
    );
  }
}

export default ProjectsPage;
