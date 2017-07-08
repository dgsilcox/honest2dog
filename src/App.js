import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js';
import Header from './components/header.js';
import Menu from './components/menu.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
