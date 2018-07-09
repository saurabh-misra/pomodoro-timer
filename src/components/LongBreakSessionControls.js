import React from 'react';
import PropTypes from 'prop-types'

const LongBreakSessionControls = ({
    isStarted,
    isPaused,
    onStart,
    onPause,
    onShorten,
    onStop
}) => {
    if(isStarted){
        return (
            <div>
                <button 
                    onClick={onShorten}
                    className="btn-session-controls btn-shorten">
                    SHORTEN
                </button>
                <button 
                    onClick={onPause}
                    className="btn-session-controls btn-pause">
                    PAUSE
                </button>
                <button 
                    onClick={onStop}
                    className="btn-session-controls btn-stop">
                    STOP
                </button>
            </div>
        );    
    }

    return (
        <div>
            <button
                onClick={onShorten} 
                className="btn-session-controls btn-shorten">
                SHORTEN
            </button>
            <button 
                onClick={onStart} 
                className="btn-session-controls btn-start">
                { isPaused ? 'RESUME' : 'START' }
            </button>
            <button 
                onClick={onStop} 
                className="btn-session-controls btn-stop">
                SKIP
            </button>
        </div>
    );
};

LongBreakSessionControls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onShorten: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};

export default LongBreakSessionControls;