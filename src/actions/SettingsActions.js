import types from '../constants/ActionTypes';
import { localStorageWrapper } from './wrappers';

export const ac_setWorkSessionDuration = value => ({
    type: types.SET_WORK_SESSION_DURATION,
    value: parseInt(value, 10)
});
export const setWorkSessionDuration = localStorageWrapper(ac_setWorkSessionDuration);

export const ac_setShortBreakSessionDuration = value => ({
    type: types.SET_SHORT_BREAK_SESSION_DURATION,
    value
});
export const setShortBreakSessionDuration = localStorageWrapper(ac_setShortBreakSessionDuration);

export const ac_setLongBreakSessionDuration = value => ({
    type: types.SET_LONG_BREAK_SESSION_DURATION,
    value
});
export const setLongBreakSessionDuration = localStorageWrapper(ac_setLongBreakSessionDuration);

export const ac_setLongBreakThreshold = value => ({
    type: types.SET_LONG_BREAK_THRESHOLD,
    value
});
export const setLongBreakThreshold = localStorageWrapper(ac_setLongBreakThreshold);

export const ac_resetToDefault = () => ({
    type: types.RESET_TO_DEFAULT
});
export const resetToDefault = localStorageWrapper(ac_resetToDefault);