import types from '../constants/ActionTypes';
import sessionModes from '../constants/SessionModes';
import durationDefaults from '../constants/DurationDefaults';

export const initializeWorkSession = (duration) => ({
    type: types.INITIALIZE_WORK_SESSION,
    mode: sessionModes.WORK,
    minutes: duration
});

export const initializeShortBreakSession = (duration) => ({
    type: types.INITIALIZE_SHORT_BREAK,
    mode: sessionModes.SHORT_BREAK,
    minutes: duration
});

export const initializeLongBreakSession = () => ({
    type: types.INITIALIZE_LONG_BREAK,
    mode: sessionModes.LONG_BREAK,
    minutes: durationDefaults.LONG_BREAK
});

export const startSession = () => ({
    type: types.START_SESSION
});

export const pauseSession = () => ({
    type: types.PAUSE_SESSION
});

export const stopSession = () => ({
    type: types.STOP_SESSION,
    mode: sessionModes.WORK
});

export const completeSession = (mode) => ({
    type: types.COMPLETE_SESSION,
    mode 
});

