import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import BehaviorContent from './behaviorcontent.js';
import Footer from './footer.js';

class Behavior extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <BehaviorContent/>
        <Footer/>
      </div>
    );
  }
}

export default Behavior;
