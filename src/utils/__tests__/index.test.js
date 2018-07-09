import * as utils from '../';
import durationDefaults from '../../constants/DurationDefaults';
import timerDefaults from '../../constants/TimerDefaults';

// Tests for decrementTimer function
// 25:00 - 24:59 - Minutes and seconds both need to be change
// 24:59 - 24:58 - only seconds need to be changed
// 00:00 - nothing needs to be changed

it('should decrement only seconds when seconds is greater than 0', () => {
    const input = {
        minutes: 24,
        seconds: 59
    };

    const output = {
        minutes: 24,
        seconds: 58
    };

    expect(
        utils.decrementTimer(input)
    ).toEqual(output);
});

it('should decrement minutes when seconds is equal to 0', () => {
    const input = {
        minutes: 24,
        seconds: 0
    };

    const output = {
        minutes: 23,
        seconds: 59
    };

    expect(
        utils.decrementTimer(input)
    ).toEqual(output);
});

it('should not decrement when minutes and seconds both are 0', () => {
    const input = {
        minutes: 0,
        seconds: 0
    };

    const output = {
        minutes: 0,
        seconds: 0
    };

    expect(
        utils.decrementTimer(input)
    ).toEqual(output);
});

it('should return input back in all other cases', () => {
    const input = {
        minutes: undefined,
        seconds: 'foo'
    };

    const output = {
        minutes: undefined,
        seconds: 'foo'
    };

    expect(
        utils.decrementTimer(input)
    ).toEqual(output);
});

// Tests for incrementTimer function
it('should increment minutes by step', () => {
    const timer = {
        minutes: 10,
        seconds: 13
    };
    
    const output = {
        minutes: 15,
        seconds: 13
    };

    expect(
        utils.incrementTimer(timer, 5, durationDefaults.WORK)
    ).toEqual(output);
});

it('should increment minutes and seconds upto threshold', () => {
    const timer = {
        minutes: 22,
        seconds: 13
    };
    
    const output = {
        minutes: 25,
        seconds: 0
    };

    expect(
        utils.incrementTimer(timer, timerDefaults.INCREMENT_STEP, durationDefaults.WORK)
    ).toEqual(output);
});
