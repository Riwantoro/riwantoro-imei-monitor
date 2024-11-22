import React from 'react';

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <span>{'🌙'}</span>
    </div>
  );
};

export default DarkModeToggle;
