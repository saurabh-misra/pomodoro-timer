import React, { Component } from 'react';
import './App.css';
import * as notificationApi from '../utils/notifications';
import Header from './Header';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount(){
    notificationApi.askPermission();
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
