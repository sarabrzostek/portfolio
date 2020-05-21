import React from "react";

import "./ProjectsPage.scss";
import HtmlIcon from "../../assets/icons/html5_icon.svg";
import GyminoImage from "../../assets/images/gymino_app.png";

class ProjectsPage extends React.Component {
  state = {
    projects: [
      {
        name: "Gymino",
        icons: [HtmlIcon, HtmlIcon],
        codeUrl: "https://github.com/maciekz1996/sqilly",
        image: GyminoImage,
      },
      {
        name: "Gymino dashboard",
        icons: [HtmlIcon, HtmlIcon],
        codeUrl: "https://github.com/maciekz1996/sqilly",
        image: GyminoImage,
      },
      {
        name: "Scudetto",
        icons: [HtmlIcon, HtmlIcon],
        codeUrl: "https://github.com/maciekz1996/sqilly",
        image: GyminoImage,
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
            alt="Technology used to create this project"
          />
        );
      });
      return (
        <div className="project-card" key={i}>
          <img src={project.image} className="project-image" alt={project.name} />
          <div className="details">
            <h3 className="project-name">{project.name}</h3>
            {icons}
          </div>
          <div className="project-card-overflow">
            <a href={project.codeUrl} className="button" target="_blank" rel="noopener noreferrer">
              Source code
            </a>
          </div>
        </div>
      );
    });

    return (
      <div className="projects-page" name="projects-section">
        <h1 className="title">Recent projects</h1>
        <section className="projects">{projects}</section>
        <div className="button">See all</div>
      </div>
    );
  }
}

export default ProjectsPage;
