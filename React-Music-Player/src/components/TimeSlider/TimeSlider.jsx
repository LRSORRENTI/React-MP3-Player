import React, { useState, useEffect } from 'react';
import './TimeSlider.css';

const TimeSlider = ({ currentTime, totalTime, onTimeChange }) => {
  const [sliderValue, setSliderValue] = useState(currentTime);

  // Update the slider value when currentTime changes from outside
  useEffect(() => {
    setSliderValue(currentTime);
  }, [currentTime]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSliderValue(newValue);
    onTimeChange(newValue);
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
        max="100" // Replace with the total duration in seconds
        value={sliderValue}
        className="slider"
        onChange={handleChange}
      />
    </div>
  );
};

export default TimeSlider;
