import React, { Component } from 'react';
import './App.css';
import ConnectedSession from './Session';
import * as notificationApi from '../utils/notifications';

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
        <ConnectedSession />
      </div>
    );
  }
}

export default App;
