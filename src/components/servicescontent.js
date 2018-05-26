import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesMenuPage">
      <div><br/><span className="serviceMenuPageTitle"><i>Services</i></span></div>
      <div><br/><span className="serviceMenuPageTitle">Practical solutions for a lifetime of happiness</span></div>
      <div><p>Does your puppy jump on guests? Does your cat hiss and scratch the vet? Does your dog bark or lunge at other dogs or people?</p></div>
      <div><p>Honest To Dog offers a full range of custom, in-home services to help meet all of your training and behavioral needs.</p></div>
      <div>
       <table>
       <tr>
            <td><a href="/puppy"><span className="servicesMenuTitle">Puppy Training</span><br/><span className="servicesMenuText">Under 5 months of age</span></a></td>
            <td><a href="/basic"><span className="servicesMenuTitle">All the Basics</span><br/><span className="servicesMenuText">Over 5 months of age</span></a></td>
       </tr>
       <tr>
            <td><a href="/handlewithcare"><span className="servicesMenuTitle">Handle With Care</span><br/><span className="servicesMenuText">Cooperative care training for dogs, cats, guinea pigs & more!</span></a></td>
            <td><a href="/behavior"><span className="servicesMenuTitle">Behavior Modification</span><br/><span className="servicesMenuText">Dog of all ages Serious behavior issues</span></a></td>
       </tr>
       </table>
      </div>
      </div>

    );
  }
}