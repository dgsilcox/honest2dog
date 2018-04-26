import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">
        <div>
          <br/>
          <span className="servicesPageTitle">Handle With Care</span><br/><span className="servicesText">All Ages, available for dogs, cats, guinea pigs and more</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/callisto_puppy.jpg"/>
          <br/>
        </div>
        <div className="servicePageRight">
                 <p>Want your pet to enjoy and participate in essential care activities? Does your pet suffer stress, anxiety or fear associated with veterinary and grooming procedures as well as the transportation to and from the facilities?
                </p>
                <p>Includes discussion of training goals and resources on bathing, transportation, nail trimming, examinations, injections, brushing and many other grooming and veterinary procedures.
                </p>
                <p>The goal is to teach pets to happily cooperate in their own care and relieve the fear, anxiety and stress they have to create a safe, comfortable experience. Focus on skills that are essential and will prepare you both for a lifetime of quality care. Pets learn to happily cooperate in their own care and we relieve the fear, anxiety and stress they have to create a safe, comfortable experience. This package will be tailored to include transportation, nail trimming, examinations, injections, brushing, bathing and many other grooming and veterinary procedures your pet finds concerning or stressful
                </p>
              <p>All engagements start with our Inital Consult.
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