import types from '../constants/ActionTypes';
import { localStorageWrapper } from './wrappers';

let deleteAllStatistics = () => ({
    type: types.DELETE_ALL_STATISTICS
});
deleteAllStatistics = localStorageWrapper(deleteAllStatistics);

export {
    deleteAllStatistics
};