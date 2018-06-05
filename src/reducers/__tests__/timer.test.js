import timer from 'reducers/timer';
import { DURATION_DEFAULTS } from 'myconstants';

it('should return empty state initially', () => {
    const action = {};

    expect(timer(undefined, action)).toEqual({});
});

it('should handle INITIALIZE_WORK_SESSION action', () => {
    const mockState = {
        minutes: DURATION_DEFAULTS.WORK,
        seconds: 0
    };
    const action = {
        type: 'INITIALIZE_WORK_SESSION'
    };

    expect(timer(undefined, action)).toEqual(mockState);
});

it('should handle INITIALIZE_SHORT_BREAK action', () => {
    const mockState = {
        minutes: DURATION_DEFAULTS.SHORT_BREAK,
        seconds: 0
    };
    const action = {
        type: 'INITIALIZE_SHORT_BREAK'
    };

    expect(timer({minutes:0, seconds: 0}, action)).toEqual(mockState);
});

it('should handle INITIALIZE_LONG_BREAK action', () => {
    const mockState = {
        minutes: DURATION_DEFAULTS.LONG_BREAK,
        seconds: 0
    };
    const action = {
        type: 'INITIALIZE_LONG_BREAK'
    };

    expect(timer({minutes:0, seconds: 0}, action)).toEqual(mockState);
});

it('should handle the DECREMENT_TIMER action', () => {
    const action = {
        type: 'DECREMENT_TIMER'
    };

    const stateBefore = {
        minutes: 25,
        seconds: 0
    };

    const stateAfter = {
        minutes: 24,
        seconds: 59
    };

    expect(
        timer(stateBefore, action)
    ).toEqual(stateAfter);
});

it('should handle the INCREMENT_TIMER action', () => {
    const action = {
        type: 'INCREMENT_TIMER',
        threshold: DURATION_DEFAULTS.WORK
    };

    const stateBefore = {
        minutes: 10,
        seconds: 13
    };

    const stateAfter = {
        minutes: 15,
        seconds: 13
    };

    expect(
        timer(stateBefore, action)
    ).toEqual(stateAfter);
});