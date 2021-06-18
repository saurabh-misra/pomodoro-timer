import React        from 'react';
import { connect }  from 'react-redux';
import PropTypes    from 'prop-types';
import './Settings.css';

import { 
    getWorkSessionDuration, 
    getShortBreakSessionDuration,
    getLongBreakSessionDuration,
    getLongBreakThreshold,
    getCurrentSessionMode,
    getSessionStatus 
} from '../reducers/';
import { 
    getWorkSessionDurationValues, 
    getShortBreakSessionDurationValues,
    getLongBreakThresholdValues 
} from '../utils';
import * as settingsActions from '../actions/SettingsActions';
import { setTimer } from '../actions/TimerActions';
import BootstrapOutlineButton from './BootstrapOutlineButton';
import sessionModes from '../constants/SessionModes';

export const Settings = ({
    workSessionDuration,
    shortBreakSessionDuration,
    longBreakSessionDuration,
    longBreakThreshold,
    currentSessionMode,
    currentSessionStatus,
    onWorkSessionDurationChange,
    onShortBreakDurationChange,
    onLongBreakDurationChange,
    onLongBreakThresholdChange,
    onResetToDefault,
    setTimer
}) => {
    const workSessionDurationValues = getWorkSessionDurationValues();
    const shortBreakDurationValues  = getShortBreakSessionDurationValues();
    const longBreakDurationValues   = getWorkSessionDurationValues();
    const longBreakThresholdValues  = getLongBreakThresholdValues();

    const handleChange = elementName => event => {
        const elementValue = event.target.value;
        const { isStarted, isPaused } = currentSessionStatus;
        const isCurrentSessionIdle = !isStarted && !isPaused;

        switch(elementName){
            case 'select-work-session-duration':
                onWorkSessionDurationChange(elementValue);
                // update the work timer in the app if the session is idle so that it displays the updated setting. Don't update the timer if the session is in progress
                if( currentSessionMode === sessionModes.WORK && isCurrentSessionIdle ) {
                    setTimer( elementValue, 0 );
                }
                return;
            case 'select-shortbreak-session-duration':
                onShortBreakDurationChange(elementValue);
                // update the short break timer in the app if the session is idle so that it displays the updated setting. Don't update the timer if the session is in progress
                if( currentSessionMode === sessionModes.SHORT_BREAK && isCurrentSessionIdle ) {
                    setTimer( elementValue, 0 );
                }
                return;
            case 'select-longbreak-session-duration':
                onLongBreakDurationChange(elementValue);
                // update the long break timer in the app if the session is idle so that it displays the updated setting. Don't update the timer if the session is in progress
                if( currentSessionMode === sessionModes.LONG_BREAK && isCurrentSessionIdle ) {
                    setTimer( elementValue, 0 );
                }
                return;
            case 'select-longbreak-threshold':
                onLongBreakThresholdChange(elementValue);
                return;
            default:
                return;
        }
    };

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-12">
                    {/* For tabs and desktop widths */}
                    <h1 className="d-none d-sm-block mb-3 text-left">
                        Settings
                    </h1>
                    {/* For mobile widths */}
                    <h3 className="d-block d-sm-none mb-3 text-left">
                        Settings
                    </h3>
                    <hr className="bg-light"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <section className="mt-2">
                        <div className="form-group row mt-5">
                            <label 
                                htmlFor="select-work-session-duration"
                                className="col-6 col-form-label text-right">
                                Work Session Duration: 
                            </label>
                            <div className="col-6">
                                <select 
                                    value={workSessionDuration} 
                                    name="select-work-session-duration"
                                    id="select-work-session-duration"
                                    onChange={handleChange('select-work-session-duration')}
                                    className="form-control">
                                    {
                                        workSessionDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label 
                                htmlFor="select-shortbreak-session-duration"
                                className="col-6 col-form-label text-right">
                                Short Break Duration: 
                            </label>
                            <div className="col-6">
                                <select 
                                    value={shortBreakSessionDuration} 
                                    name="select-shortbreak-session-duration"
                                    id="select-shortbreak-session-duration"
                                    onChange={handleChange('select-shortbreak-session-duration')}
                                    className="form-control">
                                    {
                                        shortBreakDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label
                                htmlFor="select-longbreak-session-duration"
                                className="col-6 col-form-label text-right">
                                Long Break Duration: 
                            </label>
                            <div className="col-6">
                                <select 
                                    value={longBreakSessionDuration} 
                                    name="select-longbreak-session-duration"
                                    id="select-longbreak-session-duration"
                                    onChange={handleChange('select-longbreak-session-duration')}
                                    className="form-control">
                                    {
                                        longBreakDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label
                                htmlFor="select-longbreak-threshold"
                                className="col-6 col-form-label text-right">
                                Number of work sessions before long break: 
                            </label>
                            <div className="col-6">
                                <select 
                                    value={longBreakThreshold} 
                                    name="select-longbreak-threshold"
                                    id="select-longbreak-threshold"
                                    onChange={handleChange('select-longbreak-threshold')}
                                    className="form-control">
                                    {
                                        longBreakThresholdValues.map( item => <option key={item} value={item}>{item}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <BootstrapOutlineButton
                                className="mx-auto"
                                name="btn-reset-to-default"
                                onClick={onResetToDefault}>
                                RESET TO DEFAULT    
                            </BootstrapOutlineButton>
                        </div>
                    </section>
                </div>
            </div>                            
        </div>
    )
};
Settings.propTypes = {
    workSessionDuration         : PropTypes.number.isRequired,
    shortBreakSessionDuration   : PropTypes.number.isRequired,
    longBreakSessionDuration    : PropTypes.number.isRequired,
    longBreakThreshold          : PropTypes.number.isRequired,
    currentSessionMode          : PropTypes.oneOf([
        sessionModes.WORK, 
        sessionModes.SHORT_BREAK, 
        sessionModes.LONG_BREAK
    ]).isRequired,
    currentSessionStatus        : PropTypes.exact({
        isStarted : PropTypes.bool.isRequired,
        isPaused  : PropTypes.bool.isRequired
    }).isRequired,  
    onWorkSessionDurationChange : PropTypes.func.isRequired,
    onShortBreakDurationChange  : PropTypes.func.isRequired,
    onLongBreakDurationChange   : PropTypes.func.isRequired,
    onLongBreakThresholdChange  : PropTypes.func.isRequired,
    onResetToDefault            : PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    workSessionDuration         : getWorkSessionDuration(state),
    shortBreakSessionDuration   : getShortBreakSessionDuration(state),
    longBreakSessionDuration    : getLongBreakSessionDuration(state),
    longBreakThreshold          : getLongBreakThreshold(state),
    currentSessionMode          : getCurrentSessionMode(state),
    currentSessionStatus        : getSessionStatus(state)
});
const mapDispatchToProps = {
    onWorkSessionDurationChange : settingsActions.setWorkSessionDuration,
    onShortBreakDurationChange  : settingsActions.setShortBreakSessionDuration, 
    onLongBreakDurationChange   : settingsActions.setLongBreakSessionDuration,
    onLongBreakThresholdChange  : settingsActions.setLongBreakThreshold,
    onResetToDefault            : settingsActions.resetToDefault,
    setTimer
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;