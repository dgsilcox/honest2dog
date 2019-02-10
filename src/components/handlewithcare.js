import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import HandleWithCareContent from './handlewithcarecontent.js';
import Footer from './footer.js';

class HandleWithCare extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <HandleWithCareContent/>
        <Footer/>
      </div>
    );
  }
}

export default HandleWithCare;
