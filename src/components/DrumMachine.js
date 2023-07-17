import { useState } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";
import { tracks } from "../data/tracks";

const DrumMachine = () => {
    const keys =[
        "Q","W","E",
        "A","S","D",
        "Z","X","C",
    ];

    const [currentTrack, setCurrentTrack] = useState();

    const drumPudClick = (track, audioRef) => {
        setCurrentTrack(track);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

    return (
        <div className="drum-machine" id="drum-machine">
            <Display>{currentTrack?.title}</Display>
            <div className="drum-machine-pads">
                {keys.map((key, index) => 
                    <DrumPad eventHandler={drumPudClick} track={tracks[index]} key={key} char={key}/>
                )}
            </div>
        </div>
    );
};

export default DrumMachine;
