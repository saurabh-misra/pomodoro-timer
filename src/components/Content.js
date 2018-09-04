import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ConnectedSession from './Session';
import ConnectedStatistics from './Statistics';
import ConnectedSettings from './Settings';

let Content = ({location}) => (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <ConnectedSession className={ location.pathname === '/' ? '' : 'd-none' }/>
                <Route exact path="/statistics" component={ConnectedStatistics} />
                <Route exact path="/settings" component={ConnectedSettings} />
            </div>
        </div>
    </div>
);

Content = withRouter(Content);

export default Content;