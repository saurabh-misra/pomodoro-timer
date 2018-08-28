import actionTypes from '../constants/ActionTypes';
import sessionModes from '../constants/SessionModes';
import { areDatesEqual } from '../utils/dates';

const stats = (state=[], action) => {
    if(action.type === actionTypes.COMPLETE_SESSION){
        return [
            ...state,
            {
                date: (new Date()),
                mode: action.mode
            }
        ];
    }
    return state;
};

export default stats;

export const getSessionsCount = mode => (state, date) => {
    if(!state || !state.length)
        return 0;
        
    return state.filter( 
        statistic => (
            statistic.mode === mode && 
            areDatesEqual(statistic.date, date)
        )
    ).length;
};

export const getWorkSessionsCount = getSessionsCount(sessionModes.WORK);
export const getShortBreakSessionsCount = getSessionsCount(sessionModes.SHORT_BREAK);
export const getLongBreakSessionsCount = getSessionsCount(sessionModes.LONG_BREAK);

export const getStats = state => state.length === 0
? []
: state.reduce(
    (stats, currElem) => {
        // c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            heck whether accumulator array already has an object
        // with date as the current element's date
        let stat = stats.find(
            stat => areDatesEqual(stat.date, currElem.date)
        );

        // if object with date already present, then update else push
        if(stat === undefined){
            stats.push({
                date: currElem.date,
                workSessions: getWorkSessionsCount(state, currElem.date),
                shortBreakSessions: getShortBreakSessionsCount(state, currElem.date),
                longBreakSessions: getLongBreakSessionsCount(state, currElem.date)
            });
        }
        else {
            stat = {
                ...stat,
                workSessions: getWorkSessionsCount(state, stat.date),
                shortBreakSessions: getShortBreakSessionsCount(state, stat.date),
                longBreakSessions: getLongBreakSessionsCount(state, stat.date)
            };
        }

        return stats;

    }
, []);