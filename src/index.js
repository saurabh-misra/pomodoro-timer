import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// TODO: use absolute path imports