import durationDefaults from '../constants/DurationDefaults';
import settingsDefaults from '../constants/SettingsDefaults';
import types from '../constants/ActionTypes';

// TODO: load default state from local storage if available
export const defaultState = {
    workSessionDuration: durationDefaults.WORK,
    shortBreakSessionDuration: durationDefaults.SHORT_BREAK,
    longBreakSessionDuration: durationDefaults.LONG_BREAK,
    longBreakThreshold: settingsDefaults.NUMBER_OF_WORK_SESSIONS_BEFORE_LONG_BREAK
};

export const settings = (state=defaultState, action) => {
    switch(action.type){
        case types.SET_WORK_SESSION_DURATION:
            return {
                ...state,
                workSessionDuration: action.value
            };
        case types.SET_SHORT_BREAK_SESSION_DURATION:
            return {
                ...state,
                shortBreakSessionDuration: action.value
            };
        case types.SET_LONG_BREAK_SESSION_DURATION:
            return {
                ...state,
                longBreakSessionDuration: action.value
            };
        case types.SET_LONG_BREAK_THRESHOLD:
            return {
                ...state,
                longBreakThreshold: action.value
            };
        default:
            return state;
    }
};

export default settings;

export const getWorkSessionDuration = (state) => state.workSessionDuration;
export const getShortBreakSessionDuration = (state) => state.shortBreakSessionDuration;
export const getLongBreakSessionDuration = (state) => state.longBreakSessionDuration;