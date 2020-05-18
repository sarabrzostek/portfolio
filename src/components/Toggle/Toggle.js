import React from "react";

import "./Toggle.scss";
import { FaSun, FaMoon } from "react-icons/fa";

function Toggle(props) {
  const { darkTheme, handleThemeChange } = props;
  const lightThemeClass = darkTheme ? "" : "active";
  const darkThemeClass = darkTheme ? "active" : "";

  return (
    <div className="toggle-parent">
      <FaSun className={"toggle-icon " + lightThemeClass} />

      <div className="toggle">
        <input type="checkbox" id="switch" onChange={handleThemeChange} />
        <label htmlFor="switch">Toggle</label>
      </div>

      <FaMoon className={"toggle-icon " + darkThemeClass} />
    </div>
  );
}

export default Toggle;
