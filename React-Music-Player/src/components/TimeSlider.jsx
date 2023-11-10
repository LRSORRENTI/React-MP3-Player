export default function TimeSlider() {
    return (
     <div className="time-slider">
                    <div className="slider-times">
                        <span>0:00</span>
                        <span>3:46</span>
                    </div>
                    <input type="range" min="1" max="100" value="0" className="slider" id="myRange" />
                </div> 
    )
}