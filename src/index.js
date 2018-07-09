import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

import './index.css';

const middlewares = [];
if(process.env.NODE_ENV !== 'production')
    middlewares.push( createLogger() );

const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();