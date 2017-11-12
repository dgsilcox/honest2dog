import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="topLine">&nbsp;</div>
        <div className="logo"><img src="img/HonestToDogLogoRGBko.png" alt="Honest To Dog"/></div>
        <div className="contactInfo"> Michelle Mullins<br/><a href="tel:804-405-4494">804.405.4494</a><br/> <a href="mailto:michelle@honesttodogrva.com">michelle@honesttodogrva.com</a><br/><a href="https://www.facebook.com/honesttodogrva/">facebook.com/honesttodogrva</a></div>
        <div className="clear"/>
      </div>
    );
  }
}