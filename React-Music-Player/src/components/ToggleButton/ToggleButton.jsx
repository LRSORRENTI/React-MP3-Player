const ToggleButton = ({ onToggle, isDarkMode }) => {
  return (
      <button className="toggle-button" onClick={onToggle}>
          <i className={`bi ${isDarkMode ? 'bi-moon' : 'bi-brightness-high-fill'}`}></i>
      </button>
  );
};

export default ToggleButton;
