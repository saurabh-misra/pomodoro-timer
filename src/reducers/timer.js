import { DURATION_DEFAULTS, TIMER_DEFAULTS } from 'myconstants';
import { decrementTimer, incrementTimer } from 'utils/'

const timer = (state={}, action) => {
    switch(action.type){
        case 'INITIALIZE_WORK_SESSION':
            return {
                minutes: DURATION_DEFAULTS.WORK,
                seconds: 0
            };
        case 'INITIALIZE_SHORT_BREAK':
            return {
                minutes: DURATION_DEFAULTS.SHORT_BREAK,
                seconds: 0
            };
        case 'INITIALIZE_LONG_BREAK':
            return {
                minutes: DURATION_DEFAULTS.LONG_BREAK,
                seconds: 0
            };
        case 'DECREMENT_TIMER':
            return decrementTimer(state);
        case 'INCREMENT_TIMER':
            return incrementTimer(state, TIMER_DEFAULTS.INCREMENT_STEP, action.threshold);
        default:
            return state;
    }
};

export default timer;