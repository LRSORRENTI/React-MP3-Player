import React from 'react';
import './Phone.css';
import TopMenu from '../TopMenu/TopMenu';
import ThumbnailBorder from '../ThumbnailBorder/ThumbnailBorder';
import SongDetails from '../SongDetails/SongDetails';
import TimeSlider from '../TimeSlider/TimeSlider';
import SongControls from '../SongControls/SongControls';

const Phone = ({
  darkMode,
  currentSong,
  isPlaying,
  currentTime,
  totalTime,
  onToggleDarkMode,
  onPlayPause,
  onTimeChange
}) => {
  return (
    <div className={`phone ${darkMode ? 'dark' : 'light'}`}>
      <TopMenu onToggleDarkMode={onToggleDarkMode} />
      <ThumbnailBorder
        // Assuming ThumbnailBorder takes an imageSrc and altText prop
        imageSrc={currentSong.albumArt} // This prop should be part of your currentSong state
        altText={`Album art for ${currentSong.title} by ${currentSong.artist}`}
      />
      <SongDetails
        title={currentSong.title}
        artist={currentSong.artist}
      />
      <TimeSlider
        currentTime={currentTime}
        totalTime={totalTime}
        onTimeChange={onTimeChange}
      />
      <SongControls
        isPlaying={isPlaying}
        onPlayPause={onPlayPause}
        // Assuming SongControls also take onSkipNext and onSkipPrevious props
        // onSkipNext={handleSkipNext} // These handlers would be defined in App.jsx
        // onSkipPrevious={handleSkipPrevious}
      />
    </div>
  );
};

export default Phone;
