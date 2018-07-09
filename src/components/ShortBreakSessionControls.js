import React from 'react';
import PropTypes from 'prop-types'

const ShortBreakSessionControls = ({
    isStarted,
    isPaused,
    onStart,
    onPause,
    onLengthen,
    onStop
}) => {
    if(isStarted){
        return (
            <div>
                <button 
                    onClick={onLengthen}
                    className="btn-session-controls btn-lengthen">
                    LENGTHEN
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
                onClick={onLengthen} 
                className="btn-session-controls btn-lengthen">
                LENGTHEN
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

ShortBreakSessionControls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onLengthen: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};

export default ShortBreakSessionControls;