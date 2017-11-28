import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Market!</h1>
      </div>
    );
  }
}

export default Navigation;
