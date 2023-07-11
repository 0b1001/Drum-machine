import React from 'react';

const DrumPad = (props) => {
    return (
        <div className="drum-pad" id={props.track.title}>
            <audio src={props.track.src} className='clip' id={props.children}></audio>
            {props.children}
        </div>
    );
};

export default DrumPad;