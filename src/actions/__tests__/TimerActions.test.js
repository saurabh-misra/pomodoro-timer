import * as actions from '../TimerActions';
import types from '../../constants/ActionTypes';
import durationDefaults from '../../constants/DurationDefaults';
import timerDefaults from '../../constants/TimerDefaults';

describe('TimerActions: DECREMENT_TIMER', () => {
    it('should create an action to decrement the timer', () => {
        expect(
            actions.decrementTimer()
        ).toEqual({
            type: types.DECREMENT_TIMER
        });
    });

    it('should create an action to increment the timer', () => {
        expect(
            // TODO: change this to use settings
            actions.incrementTimer(timerDefaults.INCREMENT_STEP, durationDefaults.WORK)
        ).toEqual({
            type: types.INCREMENT_TIMER,
            step: timerDefaults.INCREMENT_STEP,
            threshold: durationDefaults.WORK
        });
    });
});