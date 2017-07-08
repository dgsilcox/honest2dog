import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <span className="menuItem"><a href="/home">home</a></span><span className="menuItem"><a href="/about">about</a></span>
        <div className="clear"/>
      </div>

    );
  }
}