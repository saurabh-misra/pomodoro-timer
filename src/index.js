import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; 
import thunk from 'redux-thunk';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

import './index.css';
import { loadState } from './utils/localStorage';

const persistedState = loadState();

const middlewares = [thunk];
if(process.env.NODE_ENV !== 'production')
    middlewares.push( createLogger() );

const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();