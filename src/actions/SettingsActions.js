import types from '../constants/ActionTypes';
import { localStorageWrapper } from './wrappers';

let setWorkSessionDuration = (value) => ({
    type: types.SET_WORK_SESSION_DURATION,
    value: parseInt(value, 10)
});
setWorkSessionDuration = localStorageWrapper(setWorkSessionDuration);

let setShortBreakSessionDuration = (value) => ({
    type: types.SET_SHORT_BREAK_SESSION_DURATION,
    value
});
setShortBreakSessionDuration = localStorageWrapper(setShortBreakSessionDuration);

let setLongBreakSessionDuration = (value) => ({
    type: types.SET_LONG_BREAK_SESSION_DURATION,
    value
});
setLongBreakSessionDuration = localStorageWrapper(setLongBreakSessionDuration);

let setLongBreakThreshold = (value) => ({
    type: types.SET_LONG_BREAK_THRESHOLD,
    value
});
setLongBreakThreshold = localStorageWrapper(setLongBreakThreshold);

export {
    setWorkSessionDuration,
    setShortBreakSessionDuration,
    setLongBreakSessionDuration,
    setLongBreakThreshold
};