import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
        <div className="homePage" >
            <img src="img/brisbane_leaves.gif"/>
            <span className="homeText">
               <span className="homeTextTop"><p>Private, custom dog training based on trust and cooperation.</p></span>
               <span className="homeTextBottom"><br/><p>Let’s start the journey to your best dog, today!</p></span>
            </span>

        </div>

    );
  }
}