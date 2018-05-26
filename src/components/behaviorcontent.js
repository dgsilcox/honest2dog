import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">
        <div>
          <br/>
          <span className="servicesPageTitle">Behavior Modification</span><br/><span className="servicesText">Available for dogs of all ages with serious behavior issues.</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/artemis_muddy.jpg"/>
          <br/>
        </div>
        <div className="servicePageRight">
              <p>
                Develop practical management and behavior modification for behaviors that can affect a pet’s (and their family’s) well-being and safety.
              </p>
              <br/><br/>

             <span className="servicesPageTitle">First Step: Behavior Consult (75 to 90 minutes): $125</span>
             <p>
             Sometimes our canine companions have behavior issues that impact their welfare, not to mention, the safety of the people and pets who come into contact with them. In our Behavior Consult, we design a plan to address issues like aggression, resource guarding, reactivity and anxiety, which require more than basic learning skills and socialization. In addition we coordinate with your veterinarian to ensure all your dog’s behavioral needs are being met by your entire pet care team.
             </p>
             <br/>
             <span className="servicesTitle">Next Steps</span>
             <br/>
             <span className="servicesText">Select a training plan that best fits your needs.</span>

        </div>
        <div className="servicePageRates">
        <hr/>
         <div>
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