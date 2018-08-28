import { saveState } from '../utils/localStorage';
import { getStateToSaveLocally } from '../reducers';

export const localStorageWrapper = actionCreator => (...args) => (dispatch, getState) => {
    dispatch(actionCreator(...args));
    saveState(getStateToSaveLocally(getState()));
};