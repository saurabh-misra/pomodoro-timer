import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import configureStore from './configureStore';

import './index.css';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();