// import React, { useRef, useState } from 'react';

// export default function AudioPlayer({ src }) {
//     const audioRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const togglePlayPause = () => {
//         if (audioRef.current) {
//             if (isPlaying) {
//                 audioRef.current.pause();
//             } else {
//                 audioRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     return (
//         <div>
//             <audio ref={audioRef} src={src} />
//             <button onClick={togglePlayPause}>
//                 {isPlaying ? 'Pause' : 'Play'}
//             </button>
//         </div>
//     );
// }

import React, { useEffect, useRef } from 'react';

export default function AudioPlayer({ src, isPlaying, onTogglePlay }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [!isPlaying]);

    return (
        <audio ref={audioRef} src={src} onEnded={onTogglePlay} />
    );
}

