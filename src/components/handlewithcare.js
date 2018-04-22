import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import HandleWithCareContent from './handlewithcarecontent.js';

class HandleWithCare extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <HandleWithCareContent/>
      </div>
    );
  }
}

export default HandleWithCare;
