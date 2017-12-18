import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
        <div className="homePage">
            <div className="homeTop">
                <span><img src="img/brisbane_leaves.gif"/></span>
                <div className="homeText">
                   <div className="homeTextTop"><p>Positive, Fear Free Animal Training</p></div>
                   <div className="homeTextBottom"><p><br/><br/>Let’s start the journey to your best dog, today!</p></div>
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