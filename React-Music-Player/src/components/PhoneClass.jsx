import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faBackward, faPause, faForward, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function PhoneClass(){
      // Create a state variable to handle the theme
      const [darkMode, setDarkMode] = useState(false);

      // Toggle the dark mode state
      const toggleDarkMode = () => {
          setDarkMode(!darkMode);
      };
  
      // Determine the classes for the phone and the icon
      const phoneClass = `phone ${darkMode ? 'dark' : 'light'}`;
      const iconClass = `bi ${darkMode ? 'bi-moon' : 'bi-brightness-high-fill'}`;
    
      return (
        <div className={phoneClass}>
                <div id="top-menu">
                    <div className="button">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <button id="mode" className="button" onClick={toggleDarkMode}>
                        <FontAwesomeIcon icon={faMoon} id="toggleDark" />
                    </button>
                    <div className="button">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    </div>
                    </div>
                
    )
}