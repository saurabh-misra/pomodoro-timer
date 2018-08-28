import React        from 'react';
import { connect }  from 'react-redux';
import PropTypes    from 'prop-types';

import { 
    getWorkSessionDuration, 
    getShortBreakSessionDuration,
    getLongBreakSessionDuration,
    getLongBreakThreshold 
} from '../reducers/';
import { 
    getWorkSessionDurationValues, 
    getShortBreakSessionDurationValues,
    getLongBreakThresholdValues 
} from '../utils';
import * as selectors from '../actions/SettingsActions';

export const Settings = ({
    workSessionDuration,
    shortBreakSessionDuration,
    longBreakSessionDuration,
    longBreakThreshold,
    onWorkSessionDurationChange,
    onShortBreakDurationChange,
    onLongBreakDurationChange,
    onLongBreakThresholdChange,
}) => {
    const workSessionDurationValues = getWorkSessionDurationValues();
    const shortBreakDurationValues  = getShortBreakSessionDurationValues();
    const longBreakDurationValues   = getWorkSessionDurationValues();
    const longBreakThresholdValues  = getLongBreakThresholdValues();

    const handleChange = elementName => event => {
        const elementValue = event.target.value;
        switch(elementName){
            case 'select-work-session-duration':
                onWorkSessionDurationChange(elementValue);
                return;
            case 'select-shortbreak-session-duration':
                onShortBreakDurationChange(elementValue);
                return;
            case 'select-longbreak-session-duration':
                onLongBreakDurationChange(elementValue);
                return;
            case 'select-longbreak-threshold':
                onLongBreakThresholdChange(elementValue);
                return;
            default:
                return;
        }
    };

    return (
        <section>
            <h1>Settings</h1>
            <p>
                <label>Work Session Duration: </label>
                <select 
                    value={workSessionDuration} 
                    name="select-work-session-duration"
                    onChange={handleChange('select-work-session-duration')}>
                    {
                        workSessionDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                    }
                </select>
            </p>
            <p>
                <label>Short Break Session Duration: </label>
                <select 
                    value={shortBreakSessionDuration} 
                    name="select-shortbreak-session-duration"
                    onChange={handleChange('select-shortbreak-session-duration')}>
                    {
                        shortBreakDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                    }
                </select>
            </p>
            <p>
                <label>Long Break Session Duration: </label>
                <select 
                    value={longBreakSessionDuration} 
                    name="select-longbreak-session-duration"
                    onChange={handleChange('select-longbreak-session-duration')}>
                    {
                        longBreakDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                    }
                </select>
            </p>
            <p>
                <label>Number of work sessions before long break: </label>
                <select 
                    value={longBreakThreshold} 
                    name="select-longbreak-threshold"
                    onChange={handleChange('select-longbreak-threshold')}>
                    {
                        longBreakThresholdValues.map( item => <option key={item} value={item}>{item}</option> )
                    }
                </select>
            </p>
        </section>
    )
};
Settings.propTypes = {
    workSessionDuration         : PropTypes.number.isRequired,
    shortBreakSessionDuration   : PropTypes.number.isRequired,
    longBreakSessionDuration    : PropTypes.number.isRequired,
    longBreakThreshold          : PropTypes.number.isRequired,
    onWorkSessionDurationChange : PropTypes.func.isRequired,
    onShortBreakDurationChange  : PropTypes.func.isRequired,
    onLongBreakDurationChange   : PropTypes.func.isRequired,
    onLongBreakThresholdChange  : PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    workSessionDuration         : getWorkSessionDuration(state),
    shortBreakSessionDuration   : getShortBreakSessionDuration(state),
    longBreakSessionDuration    : getLongBreakSessionDuration(state),
    longBreakThreshold          : getLongBreakThreshold(state),
});
const mapDispatchToProps = {
    onWorkSessionDurationChange : selectors.setWorkSessionDuration,
    onShortBreakDurationChange  : selectors.setShortBreakSessionDuration, 
    onLongBreakDurationChange   : selectors.setLongBreakSessionDuration,
    onLongBreakThresholdChange  : selectors.setLongBreakThreshold,
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;