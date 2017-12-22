import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
        <div className="homePage">
            <div className="homeTop">
                <span><img src="img/brisbane_leaves.gif"/></span>
                <div className="homeText">
                   <div className="homeTextTop">Positive, Fear Free Animal Training</div>
                   <div className="homeTextBottom"><br/><br/>Let’s start the journey to your best dog, today!</div>
                </div>
            </div>
            <div className="homeBottom"><br/>Course Contributor to the
                    <br/>Fear Free Animal Trainer Course
                    <hr/>
                    Fear Free Certified Animal Trainer
                    <hr/>
                    Fear Free Level Two Certified Professional</div>
                    <br/>
        </div>
    );
  }
}