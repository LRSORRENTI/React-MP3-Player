import React from 'react';
import './TopMenu.css';
import DarkModeToggle from './DarkModeToggle'; // Updated import

const TopMenu = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <div className="top-menu">
      {/* ... other buttons */}
      <DarkModeToggle onToggle={onToggleDarkMode} isDarkMode={isDarkMode} />
      {/* ... other buttons */}
    </div>
  );
};

export default TopMenu;
