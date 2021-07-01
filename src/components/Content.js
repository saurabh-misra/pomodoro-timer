import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ConnectedSession from './Session';
import ConnectedStatistics from './Statistics';
import ConnectedSettings from './Settings';
import About from './About';

let Content = ({location}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col text-center">
                <ConnectedSession className={ location.pathname === '/' ? '' : 'd-none' }/>
                <Route exact path="/statistics" component={ConnectedStatistics} />
                <Route exact path="/settings" component={ConnectedSettings} />
                <Route exact path="/about" component={About} />
            </div>
        </div>
    </div>
);

Content = withRouter(Content);

export default Content;