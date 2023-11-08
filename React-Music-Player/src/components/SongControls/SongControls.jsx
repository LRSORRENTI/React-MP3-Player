import React, { useState } from 'react';
import './SongControls.css';

const SongControls = ({ isPlaying, onPlayPause, onSkipNext, onSkipPrevious }) => {
  // Event handler for play/pause toggle
  const handlePlayPause = () => {
    onPlayPause(); // This should be a function passed down from the parent component.
  };

  // Event handler for skip next
  const handleSkipNext = () => {
    onSkipNext(); // This should be a function passed down from the parent component.
  };

  // Event handler for skip previous
  const handleSkipPrevious = () => {
    onSkipPrevious(); // This should be a function passed down from the parent component.
  };

  return (
    <div className="song-controls">
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
