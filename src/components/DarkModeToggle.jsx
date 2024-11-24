import React, { useState } from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? "🌙" : "❤️"}
    </div>
  );
};

export default DarkModeToggle;
