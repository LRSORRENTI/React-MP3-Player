import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faBackward, faPause, faForward, faMoon, faPlay} from '@fortawesome/free-solid-svg-icons';

export default function SongControls() {
    return (
        <div  className="song-controls">
        <div className="button">
            <FontAwesomeIcon icon={faBackward} />
        </div>
        <div className="button">
            <FontAwesomeIcon icon={faPlay} className='faPlay'/>
        </div>
        <div className="button">
            <FontAwesomeIcon icon={faForward} className='faForward' />
        </div>
    </div>
    )
}