import React, { Component } from 'react';
import Dropdown from 'react-dropdown'

const options = [
  'one', 'two', 'three'
]
const defaultOption = options[0]

export default class Menu extends Component {

  render() {
    return (
      <div className="menu">

<Dropdown options={options} onChange={this._onSelect}
value={defaultOption}
placeholder="Select an option" />

{/*
            <span className="menuItem">&nbsp;</span>
            <span className="menuItem"><a href="/home">home</a></span>
            <span className="menuItem"><a href="/goals">mission</a></span>
            <span className="menuItem"><a href="/about">about</a></span>
            <span className="menuItem"><a href="/services">services</a></span>
            <span className="menuItem"><a href="/veterinary">professionals</a></span>

*/}
        <div className="clear"/>

      </div>

    );
  }
}