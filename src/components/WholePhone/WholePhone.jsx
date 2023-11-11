import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faBackward, faPause, faForward, faMoon } from '@fortawesome/free-solid-svg-icons';

import './WholePhone.css';
import ThumbnailBorder from '../ThumbnailBorder';
import SongDetails from '../SongDetails';
import TimeSlider from '../TimeSlider';
import SongControls from '../SongControls';
import AudioPlayer from '../AudioPlayer';


export default function WholePhone() {
    // Create a state variable to handle the theme
    const [darkMode, setDarkMode] = useState(true);

    // Toggle the dark mode state
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Toggles audio playback:
    const [isPlaying, setIsPlaying] = useState(false);
    const totalDuration = 238; 

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Determine the classes for the phone and the icon
    const phoneClass = `phone ${darkMode ? 'dark' : 'light'}`;
    const iconClass = `bi ${darkMode ? 'bi-moon' : 'bi-brightness-high-fill'}`;
    return (
        <div className="container">
            <div className={phoneClass}>
                <div id="top-menu">
                    <div className="button">
                        <FontAwesomeIcon icon={faArrowLeft} className='faArrowLeft' />
                    </div>
                    <button id="mode" className="button" onClick={toggleDarkMode}>
                        <FontAwesomeIcon icon={faMoon} id="toggleDark" className='toggleDark'/>
                    </button>
                    <div className="button">
                        <FontAwesomeIcon icon={faBars} className='faBars' />
                    </div>
                </div>
                <ThumbnailBorder/>
                <SongDetails/>
                <TimeSlider  isPlaying={isPlaying} totalDuration={totalDuration} />
                {/* <SongControls/> */}
                <SongControls  onTogglePlay={togglePlayPause} isPlaying={isPlaying} />
                <AudioPlayer src="../src/Audio/RabbitHole-Layton-Giordani.mp3" isPlaying={isPlaying} onTogglePlay={togglePlayPause}/>
                {/* <SongControls onTogglePlay={togglePlayPause} isPlaying={isPlaying} /> */}
            </div>
        </div>
    );
    
}
