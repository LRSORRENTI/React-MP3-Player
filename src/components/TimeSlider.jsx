import React, { useState, useEffect } from 'react';

export default function TimeSlider({ isPlaying, totalDuration }) {
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setSliderValue(oldValue => {
                    const newValue = oldValue + 1;
                    if (newValue > totalDuration) {
                        clearInterval(interval);
                        return totalDuration;
                    }
                    return newValue;
                });
            }, 1000); // Update every second
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isPlaying, totalDuration]);

    // Function to format seconds into minutes:seconds
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="time-slider">
            <div className="slider-times">
                <span>{formatTime(sliderValue)}</span>
                <span>{formatTime(totalDuration)}</span>
            </div>
            <input
                type="range"
                min="0"
                max={totalDuration}
                value={sliderValue}
                className="slider"
                id="myRange"
            />
        </div>
    );
}

