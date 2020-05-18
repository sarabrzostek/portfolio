import React from "react";

import LandingPage from "./components/LandingPage/LandingPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  state = {
    darkTheme: false,
  };
  handleThemeChange = () => {
    this.setState({
      darkTheme: !this.state.darkTheme,
    });
  };
  render() {
    const theme = this.state.darkTheme ? "theme-dark" : "theme-light";

    return (
      <div className={theme}>
        <div className="App">
          <LandingPage
            handleThemeChange={this.handleThemeChange}
            darkTheme={this.state.darkTheme}
          />
          <SkillsPage />
          <ProjectsPage />
          <ContactPage />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
