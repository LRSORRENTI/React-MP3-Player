import React from 'react';
import './TopMenu.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.jsx';


const TopMenu = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <div className="top-menu">
      {/* ... other buttons */}
      <h1>
        HELLLLLLOOOOO
      </h1>
      <DarkModeToggle onToggle={onToggleDarkMode} isDarkMode={isDarkMode} />
      {/* ... other buttons */}
    </div>
  );
};

export default TopMenu;
