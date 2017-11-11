import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

        <div className="homePage" >
            <span className="homeImg"><img src="img/brisbane_leaves.jpg"/></span>
            <span className="homeText">
               <span className="homeTextTop"><p>Private, custom dog training based on trust and cooperation</p></span>
               <span className="homeTextBottom"><p>Let’s start the journey to your best dog, today!</p></span>
            </span>
        </div>

    );
  }
}