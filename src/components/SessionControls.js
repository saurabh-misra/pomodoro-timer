import React from 'react';
import PropTypes from 'prop-types';
import sessionModes from '../constants/SessionModes';
import WorkSessionControls from './WorkSessionControls';
import ShortBreakSessionControls from './ShortBreakSessionControls';
import LongBreakSessionControls from './LongBreakSessionControls';

const SessionControls = (props) => {
    if(props.mode === sessionModes.WORK){
        return (
            <div>
                <WorkSessionControls 
                    {...props}
                />      
            </div>
        );
    } 
    else if (props.mode === sessionModes.SHORT_BREAK){
        return (
            <div>
                <ShortBreakSessionControls 
                    {...props}
                    onLengthen = {props.onLengthenShortBreak}
                />      
            </div>
        );
    } 
    else if (props.mode === sessionModes.LONG_BREAK){
        return (
            <div>
                <LongBreakSessionControls 
                    {...props}
                    onShorten = {props.onShortenLongBreak}
                />      
            </div>
        );
    }
    else {
        return null;
    }

}

SessionControls.propTypes = {
    mode: PropTypes.oneOf([
        sessionModes.WORK, 
        sessionModes.SHORT_BREAK, 
        sessionModes.LONG_BREAK
    ]).isRequired,
    isStarted: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    onPause: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onPullBack: PropTypes.func.isRequired,
    onLengthenShortBreak: PropTypes.func.isRequired,
    onShortenLongBreak: PropTypes.func.isRequired,
};

export default SessionControls;