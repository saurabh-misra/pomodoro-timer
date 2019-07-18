import React from 'react';
import PropTypes from 'prop-types'
import BootstrapOutlineButton from './BootstrapOutlineButton';

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
                <BootstrapOutlineButton 
                    onClick={onShorten}
                    className="btn-session-controls btn-shorten mr-3">
                    TAKE A SHORT BREAK
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
                onClick={onShorten} 
                className="btn-session-controls btn-shorten mr-3">
                TAKE A SHORT BREAK
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

LongBreakSessionControls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onShorten: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};

export default LongBreakSessionControls;