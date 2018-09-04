import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { loadState } from './utils/localStorage';

export default function configureStore() {
    const persistedState = loadState();

    const middlewares = [thunk];
    if(process.env.NODE_ENV !== 'production')
        middlewares.push( createLogger() );

    const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));

    return store;
};

export function configureStoreForTesting() {
    // mock the localStorage API
    window.localStorage = {
        setItem: function(){},
        getItem: function(){}
    };
    return createStore(rootReducer, applyMiddleware(thunk));
}
 