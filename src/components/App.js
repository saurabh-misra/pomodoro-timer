import React, { Component } from 'react';
import './App.css';
import * as notificationApi from '../utils/notifications';
import Header from './Header';
import Content from './Content';

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
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
