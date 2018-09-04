import React from 'react';
import PropTypes from 'prop-types'
import BootstrapOutlineButton from './BootstrapOutlineButton';

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
                <BootstrapOutlineButton 
                    onClick={onLengthen}
                    className="btn-session-controls btn-lengthen mr-3">
                    TAKE A LONG BREAK
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

    return (
        <div>
            <BootstrapOutlineButton
                onClick={onLengthen} 
                className="btn-session-controls btn-lengthen mr-3">
                TAKE A LONG BREAK
            </BootstrapOutlineButton>
            <BootstrapOutlineButton 
                onClick={onStart} 
                className="btn-session-controls btn-start mr-3">
                { isPaused ? 'RESUME' : 'START' }
            </BootstrapOutlineButton>
            <BootstrapOutlineButton 
                onClick={onStop} 
                className="btn-session-controls btn-stop">
                SKIP
            </BootstrapOutlineButton>
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