import types from '../constants/ActionTypes';
import sessionModes from '../constants/SessionModes';
import { localStorageWrapper } from './wrappers';

export const initializeWorkSession = duration => ({
    type: types.INITIALIZE_WORK_SESSION,
    mode: sessionModes.WORK,
    minutes: duration
});

export const initializeShortBreakSession = duration => ({
    type: types.INITIALIZE_SHORT_BREAK,
    mode: sessionModes.SHORT_BREAK,
    minutes: duration
});

export const initializeLongBreakSession = duration => ({
    type: types.INITIALIZE_LONG_BREAK,
    mode: sessionModes.LONG_BREAK,
    minutes: duration
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

export const ac_completeSession = mode => ({
    type: types.COMPLETE_SESSION,
    mode 
});
export const completeSession = localStorageWrapper(ac_completeSession);

