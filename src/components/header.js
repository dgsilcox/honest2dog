import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo"><img src="logo.png" alt="Honest To Dog"/></div>
        <div className="contactInfo"> Michelle Mullins <br/> (804) 404-4494 <br/> Michelle@honest2dog.com</div>
        <div className="clear"/>
      </div>
    );
  }
}