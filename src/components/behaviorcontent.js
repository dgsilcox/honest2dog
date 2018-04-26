import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">
        <div>
          <br/>
          <span className="servicesPageTitle">Behavior Consulting</span><br/><span className="servicesText">Beyond the basics</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/callisto_puppy.jpg"/>
          <br/>
        </div>
        <div className="servicePageRight">
              <p>
                Sometimes our canine companions have specific behavior issues that are beyond learning appropriate manners. Challenges like resource guarding, reactivity, separation and other anxiety related behaviors and aggression must be addressed for the safety and welfare of everyone. These sessions are designed address these issues with behavior modification plans.
              </p>
              <p>
                All engagements start with our Inital Consult.
              </p>
              <br/><br/>
        </div>
        <div className="servicePageRates">
        <div>
           <hr/>
           <span className="servicesPageTitle">Rates</span>
         </div>
         <div>
             <br/>
             <span className="servicesTitle">Initial Consult - $135.00</span>
             <br/>
             <span className="servicesText">Start the learning series with a quick start training demo for your entire family</span>
         </div>
         <div>
         <br/>
         <br/>
         <span className="servicesTitle">Packages</span>
         <br/>
         <span className="servicesText">Customized 1 hr sessions for you and any family members</span>
         <br/><br/>
         <table>
             <tr>
                <td><span className="servicesTitle">3 Custom Sessions</span></td>
                <td><span className="servicesTitle">5 Custom Sessions</span></td>
                <td><span className="servicesTitle">7 Custom Sessions</span></td>
             </tr>
             <tr>
                <td><span className="servicesText">$355 (5% savings)</span></td>
                <td><span className="servicesText">$560 (10% savings)</span></td>
                <td><span className="servicesText">$740 (15% savings)</span></td>
                </tr>
             </table>
         </div>

         <div>
             <br/>
             <br/>
             <span className="servicesTitle">Single 1 hr follow up sessions - $125.00</span>
             <br/>
             <span className="servicesText"></span>
             <br/>
         </div>

      </div>
      </div>

    );
  }
}