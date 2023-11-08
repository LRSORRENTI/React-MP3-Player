const ToggleButton = ({ onToggle }) => {
    return (
      <button id="model" className="button" onClick={onToggle}>
        <i className="bi bi-brightness-high-fill" id="toggleDark"></i>
      </button>
    );
  };

  export default ToggleButton;