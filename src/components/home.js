import React, { Component } from 'react';

import Header from './header.js';
import HomePage from './homepage.js';
import Menu from './menu.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <HomePage/>
      </div>
    );
  }
}

export default Home;
