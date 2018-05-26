import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">
        <div>
          <br/>
          <span className="servicesPageTitle">Puppy Training</span><br/><span className="servicesText">Puppies younger than 5 months.</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/artemis_basket.jpg"/>
          <br/>
        </div>
        <div className="servicePageRight">
              <p>
                Lay the foundation for a great lifelong relationship with your new puppy.
              </p>
             <br/>
             <span className="servicesTitle">We start with our New Puppy Consult $100</span>
             <br/>
             <span className="servicesText">This initial consultation of 1 Hour & 15 Minutes on the new puppy you have added to your family will get you started on a great puppy raising experience! We will discuss your lifestyle, the skills your puppy needs from house training to a reliable come when called, and more. We’ll consider your pup’s personality and breed/mix, introductions to current family pets, and provide a quick start training demo for your entire family. Together we will design a plan to bring out the best in your puppy and meet your goals.</span>
             <br/>
             <br/>

                  <span className="servicesTitle">Next Steps</span>
                  <p>Single, a la carte session or puppy training packages based on your goals.
                     Together we will select the skills you want your puppy to learn and design a training plan to get you on your way to a great relationship with your puppy.</p>

        </div>
        <div className="servicePageRates">
         <div>
         <hr/>
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