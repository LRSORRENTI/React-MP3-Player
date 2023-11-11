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

