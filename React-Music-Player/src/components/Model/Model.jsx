import './Model.css';

const Model = ({ onClick, darkMode }) => {
  return (
    <button
      id="model"
      onClick={onClick}
      aria-label={darkMode ? 'Activate light mode' : 'Activate dark mode'}
    >
      <i className={`bi ${darkMode ? 'bi-moon' : 'bi-brightness-high-fill'}`}></i>
    </button>
  );
};

export default Model;
