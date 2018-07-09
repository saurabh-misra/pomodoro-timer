import actionTypes from '../constants/ActionTypes';
import sessionModes from '../constants/SessionModes';

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

export const getWorkSessionsCount = (state, date) => {
    if(!state || !state.length)
        return 0;
        
    return state.filter( 
        statistic => (
            statistic.mode === sessionModes.WORK && 
            statistic.date.getDate() === date.getDate() &&
            statistic.date.getMonth() === date.getMonth() &&
            statistic.date.getFullYear() === date.getFullYear()
         )
    ).length;
};