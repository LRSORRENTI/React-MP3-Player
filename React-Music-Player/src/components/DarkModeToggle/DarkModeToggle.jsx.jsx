import './DarkModeToggle.css';

const DarkModeToggle = ({ onToggleDarkMode, darkMode }) => {
  return (
    <button
      className="dark-mode-toggle" // Changed from id to className
      onClick={onToggleDarkMode} // Renamed for clarity
      aria-label={darkMode ? 'Activate light mode' : 'Activate dark mode'}
    >
      <i className={`bi ${darkMode ? 'bi-moon-fill' : 'bi-brightness-high-fill'}`}></i>
    </button>
  );
};

export default DarkModeToggle;
