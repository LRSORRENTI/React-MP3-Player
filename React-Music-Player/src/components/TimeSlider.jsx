// export default function TimeSlider() {
//     return (
//      <div className="time-slider">
//                     <div className="slider-times">
//                         <span>0:00</span>
//                         <span>3:58</span>
//                     </div>
//                     <input type="range" min="1" max="100" value="0" className="slider" id="myRange" />
//                 </div> 
//     )
// }
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

    return (
        <div className="time-slider">
            <div className="slider-times">
                <span>0:00</span>
                <span>3:58</span>
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
