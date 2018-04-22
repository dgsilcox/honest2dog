import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import BehaviorContent from './behaviorcontent.js';

class Behavior extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <BehaviorContent/>
      </div>
    );
  }
}

export default Behavior;
