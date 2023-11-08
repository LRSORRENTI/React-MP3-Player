import React from 'react';
import './SongDetails.css';

const SongDetails = ({ title, artist }) => {
    return (
      <div className="song-details">
        <h1 className="song-title">{title}</h1>
        <span className="artist">{artist}</span>
      </div>
    );
};

export default SongDetails;
