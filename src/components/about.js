import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import AboutPage from './aboutpage.js';

class About extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <AboutPage/>
      </div>
    );
  }
}

export default About;
