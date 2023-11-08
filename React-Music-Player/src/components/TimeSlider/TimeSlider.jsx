const TimeSlider = () => {
    // NEED TO ADD STATE TO MANAGE SLIDER VALUES LATER
    return (
      <div id="time-slider">
        <div className="slider-times">
          <span>1:21</span>
          <span>3:46</span>
        </div>
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
      </div>
    );
  };

  
  export default TimeSlider;