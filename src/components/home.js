import React, { Component } from 'react';

import Header from './header.js';
import HomeContent from './homecontent.js';
import Menu from './menu.js';
import HomeFooter from './homefooter.js';

class Home extends Component {
  render() {
    return (
      <div class="content">
        <Header/>
        <Menu/>
        <HomeContent/>
        <HomeFooter/>
      </div>
    );
  }
}

export default Home;
