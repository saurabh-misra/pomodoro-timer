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
import BootstrapOutlineButton from './BootstrapOutlineButton';

export const Settings = ({
    workSessionDuration,
    shortBreakSessionDuration,
    longBreakSessionDuration,
    longBreakThreshold,
    onWorkSessionDurationChange,
    onShortBreakDurationChange,
    onLongBreakDurationChange,
    onLongBreakThresholdChange,
    onResetToDefault,
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
        <section className="mt-2 w-50 mx-auto">
            <h1>Settings</h1>
            <div className="form-group row mt-5">
                <label 
                    htmlFor="select-work-session-duration"
                    className="col col-form-label text-right">
                    Work Session Duration: 
                </label>
                <div className="col">
                    <select 
                        value={workSessionDuration} 
                        name="select-work-session-duration"
                        id="select-work-session-duration"
                        onChange={handleChange('select-work-session-duration')}
                        className="form-control w-25">
                        {
                            workSessionDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                        }
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label 
                    htmlFor="select-shortbreak-session-duration"
                    className="col col-form-label text-right">
                    Short Break Duration: 
                </label>
                <div className="col">
                    <select 
                        value={shortBreakSessionDuration} 
                        name="select-shortbreak-session-duration"
                        id="select-shortbreak-session-duration"
                        onChange={handleChange('select-shortbreak-session-duration')}
                        className="form-control w-25">
                        {
                            shortBreakDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                        }
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label
                    htmlFor="select-longbreak-session-duration"
                    className="col col-form-label text-right">
                    Long Break Duration: 
                </label>
                <div className="col">
                    <select 
                        value={longBreakSessionDuration} 
                        name="select-longbreak-session-duration"
                        id="select-longbreak-session-duration"
                        onChange={handleChange('select-longbreak-session-duration')}
                        className="form-control w-25">
                        {
                            longBreakDurationValues.map( item => <option key={item} value={item}>{item}</option> )
                        }
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label
                    htmlFor="select-longbreak-threshold"
                    className="col col-form-label text-right">
                    Number of work sessions before long break: 
                </label>
                <div className="col">
                    <select 
                        value={longBreakThreshold} 
                        name="select-longbreak-threshold"
                        id="select-longbreak-threshold"
                        onChange={handleChange('select-longbreak-threshold')}
                        className="form-control w-25">
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
    onResetToDefault            : PropTypes.func.isRequired,
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
    onResetToDefault            : selectors.resetToDefault,
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;