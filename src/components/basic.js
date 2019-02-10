import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import BasicContent from './basiccontent.js';
import Footer from './footer.js';

class Basic extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <BasicContent/>
        <Footer/>
      </div>
    );
  }
}

export default Basic;
