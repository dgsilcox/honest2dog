import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="bodyText">
        <span className="homeLeft">
            <p>Welcome to Honest To Dog</p>
        </span>
        <span className="homeRight">
            <img src="jinks_bad_dog.jpg" alt="Jinks with Chewed Dog Bed"/>
        </span>
      </div>
    );
  }
}