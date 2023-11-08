import React, { useState } from 'react';
import './SongControls.css';

const SongControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    // Here you would typically call a music playing service or audio API
    setIsPlaying(!isPlaying);
  };

  const handleSkipNext = () => {
    // Logic to skip to the next song
  };

  const handleSkipPrevious = () => {
    // Logic to skip to the previous song
  };

  return (
    <div id="song-controls">
      <div className="button" onClick={handleSkipPrevious}>
        <i className="fas fa-backward"></i>
      </div>
      <div className="button" onClick={handlePlayPause}>
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </div>
      <div className="button" onClick={handleSkipNext}>
        <i className="fas fa-forward"></i>
      </div>
    </div>
  );
};

export default SongControls;
