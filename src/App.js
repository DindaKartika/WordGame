import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './page/home.js'

import Profile from './page/profile.js'

class App extends Component {
  render() {
    return (
      <div >
        <Profile/>
      </div>
    );
  }
}

export default App;
