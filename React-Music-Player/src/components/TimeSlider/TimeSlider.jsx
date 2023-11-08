import React, { useState } from 'react';
import './TimeSlider.css';

const TimeSlider = ({ currentTime, totalTime, onTimeChange }) => {
  const [sliderValue, setSliderValue] = useState(currentTime);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSliderValue(newValue);
    onTimeChange(newValue); // This function would be passed in props and should handle the time change logic
  };

  return (
    <div className="time-slider">
      <div className="slider-times">
        <span>{currentTime}</span>
        <span>{totalTime}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100" // This should be the total duration in seconds
        value={sliderValue}
        className="slider"
        onChange={handleChange}
      />
    </div>
  );
};

export default TimeSlider;
