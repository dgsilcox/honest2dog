import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">
        <div>
          <br/>
          <span className="servicesPageTitle">All the Basics</span><br/><span className="servicesText">Dogs 5 months or older</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/JinksTD1.jpg"/>
          <br/>
        </div>
        <div className="servicePageRight">
              <p>
                Bring out the best in your dog - whether they just moved in or they’ve lived with you for years.
              </p>
              <p>
              A great follow up to Puppy Training!
              </p>
              <br/>
             <span className="servicesPageTitle">First Step: Basics Consult (75 minutes): $125</span>
             <p>
             Honest To Dog discusses your dog’s current skill level, personality, breed/mix and your dog’s behavioral health and enrichment. We also talk about your lifestyle and how your pet fits into that lifestyle. With you and your family, we determine the specific skills you’d like your furry companion to learn—from sit and stay to loose-leash walking - and design a training plan to meet your goals. Also includes a quick-start training demo for your entire family.
             </p>
             <br/>
             <span className="servicesTitle">Next Steps</span>
             <br/>
             <span className="servicesText">Select single, a la carte session or training packages based on your goals.
                                            Together we will select the skills you want your dog to learn and design a training plan to get you on your way to a great relationship with your best friend.</span>

        </div>
        <div className="servicePageRates">
        <div>
           <br/>
           <hr/>
         </div>
         <div>
         <br/>
         <span className="servicesTitle">Honest Dog Packages</span>
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
                <td><span className="servicesText">$285 (5% savings)</span></td>
                <td><span className="servicesText">$450 (10% savings)</span></td>
                <td><span className="servicesText">$595 (15% savings)</span></td>
                </tr>
             </table>
         </div>

         <div>
             <br/>
             <br/>
             <span className="servicesTitle">Single 1 hr follow up sessions - $100.00</span>
             <br/>
             <span className="servicesText"></span>
             <br/>
         </div>

      </div>
      </div>

    );
  }
}