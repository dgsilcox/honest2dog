import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="bodyText">
        <span className="homeLeft">

            <p>
                Our website is under construction.
            </p>
            <p>
                Please connect with us on Facebook.
            </p>
            <p>
                <a href="https://www.facebook.com/honesttodogrva/"><img src="img/FB-FindUsOnFacebook-printpackaging-2.png" alt="Find Us On Facebook Link"/></a>
            </p>

        </span>
        {/*
        <span className="homeRight">
            <img src="jinks_bad_dog.jpg" alt="Jinks with Chewed Dog Bed"/>
        </span>
        */}
      </div>
    );
  }
}