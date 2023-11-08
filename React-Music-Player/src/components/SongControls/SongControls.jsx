import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import './SongControls.css';

const SongControls = ({ isPlaying, onPlayPause, onSkipNext, onSkipPrevious }) => {
  return (
    <div className="song-controls">
      <button className="button" onClick={onSkipPrevious} aria-label="Skip to previous song">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="button" onClick={onPlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="button" onClick={onSkipNext} aria-label="Skip to next song">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default SongControls;
