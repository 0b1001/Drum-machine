import React, { useEffect, useRef } from "react";

const DrumPad = (props) => {
    const audioRef = useRef();

    const playAudio = () => {
        props.eventHandler(props.track, audioRef);
        audioRef.current.parentElement.className = 'drum-pad active';
        setTimeout(() => {
            audioRef.current.parentElement.className = 'drum-pad';
        }, audioRef.current.duration * 1000);
    };

    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.key === props.char.toLowerCase() || e.key === props.char.toUpperCase()) {
                playAudio();
            }
        };

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    });

    return (
        <div
            className="drum-pad"
            id={props.track.title}
            onClick={() => playAudio()}
        >
            <audio
                src={props.track.src}
                className="clip"
                id={props.char}
                ref={audioRef}
            ></audio>
            <div>{props.char}</div>
        </div>
    );
};

export default DrumPad;
