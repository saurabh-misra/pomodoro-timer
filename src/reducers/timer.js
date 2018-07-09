import { decrementTimer, incrementTimer } from '../utils'
import types from '../constants/ActionTypes';

const timer = (state={}, action) => {
    switch(action.type){
        case types.INITIALIZE_WORK_SESSION:
        case types.INITIALIZE_SHORT_BREAK:
        case types.INITIALIZE_LONG_BREAK:
            return {
                minutes: action.minutes,
                seconds: 0
            };
        case types.DECREMENT_TIMER:
            return decrementTimer(state);
        case types.INCREMENT_TIMER:
            return incrementTimer(state, action.step, action.threshold);
        case types.SET_TIMER:
            return {
                minutes: action.minutes,
                seconds: action.seconds
            };
        default:
            return state;
    }
};

export default timer;

export const getTimer = (state) => state;