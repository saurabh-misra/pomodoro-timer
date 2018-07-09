import React from 'react';
import PropTypes from 'prop-types'

const WorkSessionControls = ({
    isStarted,
    isPaused,
    onStart,
    onPause,
    onStop,
    onPullBack
}) => {
    if(isStarted){
        return (
            <div>
                <button
                    onClick={onPullBack} 
                    className="btn-session-controls btn-pull-back">
                    PULL BACK
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

    if(isPaused){
        return (
            <div>
                <button 
                    onClick={onPullBack}
                    className="btn-session-controls btn-pull-back">
                    PULL BACK
                </button>
                <button
                    onClick={onStart}
                    className="btn-session-controls btn-start">
                    RESUME
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
                onClick={onStart}
                className="btn-session-controls btn-start">
                START
            </button>
        </div>
    );
};

WorkSessionControls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onPullBack: PropTypes.func.isRequired,
};

export default WorkSessionControls;