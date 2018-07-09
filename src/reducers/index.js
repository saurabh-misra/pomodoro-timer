import { combineReducers } from 'redux';

import timer, * as timerSelectors from './timer';
import session, * as sessionSelectors from './session';
import stats, * as statsSelectors from './stats';
import settings, * as settingsSelectors from './settings';

const rootReducer = combineReducers({
    timer,
    session,
    stats,
    settings
});

export default rootReducer;

export const getWorkSessionsCount = (state, date) => 
    statsSelectors.getWorkSessionsCount(state.stats, date);
export const getTimer = (state) => timerSelectors.getTimer(state.timer);
export const getCurrentSessionMode = (state) => sessionSelectors.getCurrentSessionMode(state.session);
export const getSessionStatus = (state) => sessionSelectors.getSessionStatus(state.session);

// 'settings' selectors
export const getWorkSessionDuration = (state) => settingsSelectors.getWorkSessionDuration(state.settings);
export const getShortBreakSessionDuration = (state) => settingsSelectors.getShortBreakSessionDuration(state.settings);
export const getLongBreakSessionDuration = (state) => settingsSelectors.getLongBreakSessionDuration(state.settings);