import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import ServicesContent from './vetservicescontent.js';

class VetServices extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <ServicesContent/>
      </div>
    );
  }
}

export default VetServices;
