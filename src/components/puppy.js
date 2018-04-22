import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import PuppyContent from './puppycontent.js';

class Puppy extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <PuppyContent/>
      </div>
    );
  }
}

export default Puppy;
