import { useState } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";
import { tracks } from "../data/tracks";

const DrumMachine = () => {
    const [keys, setKeys] = useState([
        "Q","W","E",
        "A","S","D",
        "Z","X","C",
    ]);
    return (
        <div className="drum-machine" id="drum-machine">
            <Display>Track</Display>
            <div className="drum-machine-pads">
                {keys.map((key, index) => 
                    <DrumPad track={tracks[index]}>{key}</DrumPad>
                )}
            </div>
        </div>
    );
};

export default DrumMachine;
