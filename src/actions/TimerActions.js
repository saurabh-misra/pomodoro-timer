import types from '../constants/ActionTypes';

export const decrementTimer = () => ({
    type: types.DECREMENT_TIMER
});

export const incrementTimer = (step, threshold) => ({
    type: types.INCREMENT_TIMER,
    step,
    threshold
});

export const setTimer = (minutes, seconds) => ({
    type: types.SET_TIMER,
    minutes,
    seconds
});