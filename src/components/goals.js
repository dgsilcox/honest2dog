import React, { Component } from 'react';

import Header from './header.js';
import Menu from './menu.js';
import GoalsContent from './goalscontent.js';
import Footer from './footer.js';

class Goals extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <GoalsContent/>
        <Footer/>
      </div>
    );
  }
}

export default Goals;
