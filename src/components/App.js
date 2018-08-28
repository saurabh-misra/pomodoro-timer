import React, { Component } from 'react';
import './App.css';
import ConnectedSession from './Session';
import * as notificationApi from '../utils/notifications';
import { Route } from 'react-router-dom';
import ConnectedStatistics from './Statistics';
import ConnectedSettings from './Settings';

class App extends Component {
  componentDidMount(){
    notificationApi.askPermission(
      Notification, 
      notificationApi.checkPermissionStatus(Notification)
    );
  }

  render() {
    return (
      <div>
        <h1>Pomodoro Timer</h1>
        <Route exact path="/" component={ConnectedSession} />
        <Route exact path="/statistics" component={ConnectedStatistics} />
        <Route exact path="/settings" component={ConnectedSettings} />
      </div>
    );
  }
}

export default App;
