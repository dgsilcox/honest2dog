import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">
        <div>
          <br/>
          <span className="servicesPageTitle">Puppy Training</span><br/><span className="servicesText">Puppies under 6 months</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/callisto_puppy.jpg"/>
          <br/>
        </div>
        <div className="servicePageRight">
              <p>
                Evaluation or consult on the new puppy you plan to add or have added to your family.  We will discuss the basic training you want your new puppy to have, what activities your new puppy might enjoy based on your pup’s personality and breed/mix.
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
             <span className="servicesTitle">Initial Consult - $125.00</span>
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