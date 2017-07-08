import React, { Component } from 'react';

import Header from './header.js';
import HomeContent from './homecontent.js';
import Menu from './menu.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <HomeContent/>
      </div>
    );
  }
}

export default Home;
