import React from 'react';
import PropTypes from 'prop-types'
import BootstrapOutlineButton from './BootstrapOutlineButton';

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
                <BootstrapOutlineButton
                    onClick={onPullBack} 
                    className="btn-session-controls btn-pull-back mr-3">
                    ADD 5 MINUTES
                </BootstrapOutlineButton>
                <BootstrapOutlineButton
                    onClick={onPause} 
                    className="btn-session-controls btn-pause mr-3">
                    PAUSE
                </BootstrapOutlineButton>
                <BootstrapOutlineButton
                    onClick={onStop} 
                    className="btn-session-controls btn-stop">
                    STOP
                </BootstrapOutlineButton>
            </div>
        );
    }

    if(isPaused){
        return (
            <div>
                <BootstrapOutlineButton 
                    onClick={onPullBack}
                    className="btn-session-controls btn-pull-back mr-3">
                    ADD 5 MINUTES
                </BootstrapOutlineButton>
                <BootstrapOutlineButton
                    onClick={onStart}
                    className="btn-session-controls btn-start mr-3">
                    RESUME
                </BootstrapOutlineButton>
                <BootstrapOutlineButton 
                    onClick={onStop}
                    className="btn-session-controls btn-stop">
                    STOP
                </BootstrapOutlineButton>
            </div>
        );
    }

    return (
        <div>
            <BootstrapOutlineButton 
                onClick={onStart}
                className="btn-session-controls btn-start">
                START
            </BootstrapOutlineButton>
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