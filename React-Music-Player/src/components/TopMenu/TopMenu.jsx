const TopMenu = ({ onToggleDarkMode }) => {
    return (
      <div id="top-menu">
        {/* ... other buttons */}
        <ToggleButton onToggle={onToggleDarkMode} />
        {/* ... other buttons */}
      </div>
    );
  };

  export default TopMenu;