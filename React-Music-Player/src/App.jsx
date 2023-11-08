import React, { useState } from 'react';
import './App.css';
import Phone from './components/Phone/Phone'; // Assuming Phone includes TopMenu and other components

function App() {
  // Define the state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Define the state for current song details
  const [currentSong, setCurrentSong] = useState({
    title: "SUMMER",
    artist: "Band ft. Song Artist",
    // Add other song details as needed
  });

  // Define the state for whether the song is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // Define the state for the current time in the song
  const [currentTime, setCurrentTime] = useState("0:00");

  // Define the total time of the song (this might be dynamic based on the song)
  const [totalTime, setTotalTime] = useState("3:46");

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Here you would also include logic to apply the dark mode styling
  };

  // Function to toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Here you would include logic to actually play or pause the music
  };

  // Function to handle time change from the slider
  const handleTimeChange = (newTime) => {
    setCurrentTime(newTime);
    // Here you would include logic to seek the music to the new time
  };

  // Other functions to handle song changes, etc...

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1> Music Player!</h1>
      <Phone
        darkMode={darkMode}
        currentSong={currentSong}
        isPlaying={isPlaying}
        currentTime={currentTime}
        totalTime={totalTime}
        onToggleDarkMode={toggleDarkMode}
        onPlayPause={togglePlayPause}
        onTimeChange={handleTimeChange}
        // Pass other necessary props and handlers
      />
    </div>
  );
}

export default App;
