import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
            <span className="menuItem">&nbsp;</span>
            <span className="menuItem"><a href="/home">home</a></span>
            <span className="menuItem"><a href="/goals">our mission</a></span>
            <span className="menuItem"><a href="/about">about us</a></span>
            <span className="menuItem"><a href="/services">services</a></span>
            <span className="menuItem"><a href="/veterinary">veterinary</a></span>
        <div className="clear"/>
      </div>

    );
  }
}