import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import PuppyContent from './puppycontent.js';
import Footer from './footer.js';

class Puppy extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <PuppyContent/>
        <Footer/>
      </div>
    );
  }
}

export default Puppy;
