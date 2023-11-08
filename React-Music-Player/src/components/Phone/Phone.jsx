import React from 'react';
import './Phone.css';
import TopMenu from '../TopMenu/TopMenu';
import ThumbnailBorder from '../ThumbnailBorder/ThumbnailBorder';
import SongDetails from '../SongDetails/SongDetails';
import TimeSlider from '../TimeSlider/TimeSlider';
import SongControls from '../SongControls/SongControls';

const Phone = ({ darkMode }) => {
  return (
    <div className={`phone ${darkMode ? 'dark' : 'light'}`}>
      <TopMenu darkMode={darkMode} />
      <ThumbnailBorder />
      <SongDetails title="SUMMER" artist="Band ft. Song Artist" />
      <TimeSlider />
      <SongControls />
    </div>
  );
};

export default Phone;
