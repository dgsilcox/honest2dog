import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import AboutContent from './aboutcontent.js';

class About extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <AboutContent/>
      </div>
    );
  }
}

export default About;
