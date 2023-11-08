import React from 'react';
import './TopMenu.css';
import ToggleButton from './ToggleButton';

const TopMenu = ({ onToggleDarkMode }) => {
  return (
    <div className="top-menu">
      {/* ... other buttons */}
      <ToggleButton onToggle={onToggleDarkMode} />
      {/* ... other buttons */}
    </div>
  );
};

export default TopMenu;
