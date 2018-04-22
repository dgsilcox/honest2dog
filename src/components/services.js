import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import ServicesContent from './servicescontent.js';
import Puppy from './puppy.js';
import Footer from './footer.js';

class Services extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <ServicesContent/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default Services;
