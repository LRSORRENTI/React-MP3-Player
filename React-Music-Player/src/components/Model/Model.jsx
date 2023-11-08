import './Model.css'

const Model = ({ onClick, darkMode }) => {
    return (
      <button id="model" onClick={onClick}>
        <i className={`bi ${darkMode ? 'bi-moon' : 'bi-brightness-high-fill'}`}></i>
      </button>
    );
  };
  
  export default Model;