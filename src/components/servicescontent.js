import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesMenuPage">
      <div><br/><span className="serviceMenuPageTitle">Services</span></div>
      <div>
       <table>
       <tr>
            <td><a href="/puppy"><span className="servicesMenuTitle">Puppy Training</span><br/><span className="servicesMenuText">Under 6 months of age</span></a></td>
            <td><a href="/basic"><span className="servicesMenuTitle">Basic</span><br/><span className="servicesMenuText">Dogs over 6 months of age</span></a></td>
       </tr>
       <tr>
            <td><a href="/handlewithcare"><span className="servicesMenuTitle">Handle With Care</span><br/><span className="servicesMenuText">Cooperative care training for dogs, cats, guinea pigs & more!</span></a></td>
            <td><a href="/behavior"><span className="servicesMenuTitle">Behavior</span><br/><span className="servicesMenuText">Dog of all ages Serious behavior issues</span></a></td>
       </tr>
       </table>
      </div>
      </div>

    );
  }
}