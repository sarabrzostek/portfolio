import React from "react";

import LandingPage from "./components/LandingPage/LandingPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  state = {
    darkTheme: localStorage.getItem("darkTheme") === "true",
  };
  componentDidMount() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !this.state.darkTheme
    ) {
      console.log("dark");
      this.setState({ darkTheme: true });
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches &&
      this.state.darkTheme
    ) {
      this.setState({ darkTheme: false });
    }
  }
  handleThemeChange = () => {
    this.setState({
      darkTheme: !this.state.darkTheme,
    });
    localStorage.setItem("darkTheme", !this.state.darkTheme);
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
