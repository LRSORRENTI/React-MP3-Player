import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faBackward, faPause, faForward, faMoon } from '@fortawesome/free-solid-svg-icons';

import './WorkingWholePhone.css';

export default function WorkingWholePhone() {
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
        <div className="container">
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
    
                <div className="thumbnail-border">
                    <div className="song-thumbnail"></div>
                </div>
    
                <div id="song-details">
                    <h1 className="song-title">SUMMER</h1>
                    <span className="artist">Band ft. Song Artist</span>
                </div>
    
                <div id="time-slider">
                    <div className="slider-times">
                        <span>1:21</span>
                        <span>3:46</span>
                    </div>
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                </div>
    
                <div id="song-controls">
                    <div className="button">
                        <FontAwesomeIcon icon={faBackward} />
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faPause} />
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faForward} />
                    </div>
                </div>
            </div>
        </div>
    );
    
}
