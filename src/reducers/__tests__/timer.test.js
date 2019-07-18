import timer, { getTimer } from '../timer';
import durationDefaults from '../../constants/DurationDefaults';
import types from '../../constants/ActionTypes';
import timerDefaults from '../../constants/TimerDefaults';
import * as timerActions from '../../actions/TimerActions';
import * as sessionActions from '../../actions/SessionActions';

describe('timer reducer', () => {
    it('should return empty state initially', () => {
        const action = {};

        expect(timer(undefined, action)).toEqual({});
    });

    it('should handle INITIALIZE_WORK_SESSION action', () => {
        const action = sessionActions.initializeWorkSession(durationDefaults.WORK);
        const stateAfter = {
            minutes: durationDefaults.WORK,
            seconds: 0
        };

        expect(timer(undefined, action)).toEqual(stateAfter);
    });

    it('should handle INITIALIZE_SHORT_BREAK action', () => {
        const action = sessionActions.initializeShortBreakSession(durationDefaults.SHORT_BREAK);
        const stateAfter = {
            minutes: durationDefaults.SHORT_BREAK,
            seconds: 0
        };

        expect(timer({minutes:0, seconds: 0}, action)).toEqual(stateAfter);
    });

    it('should handle INITIALIZE_LONG_BREAK action', () => {
        const action = sessionActions.initializeLongBreakSession(durationDefaults.LONG_BREAK);
        const stateAfter = {
            minutes: durationDefaults.LONG_BREAK,
            seconds: 0
        };

        expect(timer({minutes:0, seconds: 0}, action)).toEqual(stateAfter);
    });

    it('should handle the DECREMENT_TIMER action', () => {
        const stateBefore = {
            minutes: 25,
            seconds: 0
        };

        const action = timerActions.decrementTimer();

        const stateAfter = {
            minutes: 24,
            seconds: 59
        };

        expect(
            timer(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle the INCREMENT_TIMER action', () => {    
        const stateBefore = {
            minutes: 10,
            seconds: 13
        };

        // TODO: duration default should be replaced with setting
        const action = timerActions.incrementTimer(timerDefaults.INCREMENT_STEP, durationDefaults.WORK);

        const stateAfter = {
            minutes: 15,
            seconds: 13
        };

        expect(
            timer(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle the SET_TIMER action', () => {    
        const stateBefore = {
            minutes: 24,
            seconds: 13
        };

        const action = timerActions.setTimer(10,34);

        const stateAfter = {
            minutes: 10,
            seconds: 34
        };

        expect(
            timer(stateBefore, action)
        ).toEqual(stateAfter);
    });
});

describe('getTimer selector', () => {
    it('should return an object with values for minutes and seconds', () => {
        expect(
            getTimer({
                minutes: 23,
                seconds: 34
            })
        ).toEqual(
            {
                minutes: 23,
                seconds: 34
            }
        );
    });
});