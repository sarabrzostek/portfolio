import React from "react";

import "./ProjectsPage.scss";

import AppIcon from "../../assets/images/app.jpg";
import VcIcon from "../../assets/images/vc.jpg";
import OtherIcon from "../../assets/images/other.jpg";

import AppWeb from "../../assets/downloads/app-web.zip";
import Vc from "../../assets/downloads/vc.zip";
import Other from "../../assets/downloads/other.zip";
import All from "../../assets/downloads/all.zip";

class ProjectsPage extends React.Component {
  state = {
    projects: [
      {
        name: "Websites and mobile apps",
        downloadUrl: AppWeb,
        image: AppIcon,
      },
      {
        name: "Visual communication",
        downloadUrl: Vc,
        image: VcIcon,
      },
      {
        name: "Other",
        downloadUrl: Other,
        image: OtherIcon,
      },
    ],
  };
  render() {
    const projects = this.state.projects.map((project, i) => {
      return (
        <div className="project-card" key={i}>
          <img src={project.image} className="project-image" alt={project.name} />
          <div className="details">
            <h2 className="project-name">{project.name}</h2>
          </div>
          <div className="project-card-overflow">
            <a href={project.downloadUrl} className="button" download>
              Download
            </a>
          </div>
        </div>
      );
    });

    return (
      <div className="projects-page" name="projects-section">
        <h1 className="title">Projects</h1>
        <section className="projects">{projects}</section>
        <a href={All} download>
          <div className="button">Download all</div>
        </a>
      </div>
    );
  }
}

export default ProjectsPage;
