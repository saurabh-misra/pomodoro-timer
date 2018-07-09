import types from '../constants/ActionTypes';

export const setWorkSessionDuration = (value) => ({
    type: types.SET_WORK_SESSION_DURATION,
    value
});

export const setShortBreakSessionDuration = (value) => ({
    type: types.SET_SHORT_BREAK_SESSION_DURATION,
    value
});

export const setLongBreakSessionDuration = (value) => ({
    type: types.SET_LONG_BREAK_SESSION_DURATION,
    value
});

export const setLongBreakThreshold = (value) => ({
    type: types.SET_LONG_BREAK_THRESHOLD,
    value
});