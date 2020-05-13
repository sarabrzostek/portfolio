import React from "react";

import LandingPage from "./components/LandingPage/LandingPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
