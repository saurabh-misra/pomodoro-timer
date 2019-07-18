import types from '../constants/ActionTypes';

const session = (state = {}, action) => {
    switch(action.type){
        case types.INITIALIZE_WORK_SESSION:
        case types.INITIALIZE_SHORT_BREAK:
        case types.INITIALIZE_LONG_BREAK:
        case types.STOP_SESSION:
            return {
                mode: action.mode,
                isPaused: false,
                isStarted: false
            };
        case types.START_SESSION:
            return {
                ...state,
                isPaused: false,
                isStarted: true
            };
        case types.PAUSE_SESSION:
            return {
                ...state,
                isPaused: true,
                isStarted: false
            };
        case types.COMPLETE_SESSION:
            return {
                ...state,
                isPaused: false,
                isStarted: false
            };
        default:
            return state;
    }
};

export default session;

export const getCurrentSessionMode = (state) => state.mode;

export const getSessionStatus = (state) => ({
    isStarted: state.isStarted,
    isPaused: state.isPaused
});