import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">
        <div>
          <br/>
          <span className="servicesPageTitle">Handle With Care</span><br/><span className="servicesText">All Ages, available for dogs, cats, guinea pigs and more of all ages</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/callisto_puppy.jpg"/>
          <br/>
        </div>
        <div className="servicePageRight">
                 <p>Relieve fear, anxiety and stress during transportation and care procedures such as nail trims, medical exams, grooming and medicating. Teach your pet to be comfortable and relaxed at the veterinarian’s or groomer’s office.
                </p>
              <br/><br/>
        </div>
        <div className="servicePageRates">
        <div>
           <hr/>
           <span className="servicesPageTitle">First Step: Handle With Care Intro (60 minutes): $100.00</span>
           <p>Does your pet become anxious, stressed or fearful when they’re at the vet or groomer or on the ride to and from these facilities? In this consultation, we’ll discuss training goals and resources for bathing, transportation, nail trimming, examinations, injections, brushing and more. We’ll then design a Handle With Care training plan to help ease your pet’s stress and acclimate them to these essential-care activities.
           </p>
         </div>
         <div>
             <br/>
             <span className="servicesTitle">Next Steps</span>
             <br/>
             <span className="servicesText">Select single, a la carte session or a training package based on your goals.
                                            Together we will select the skills you want your animal needs design a training plan to get you on your way to stress free cooperative care.</span>
         </div>
         <div>
         <br/>
         <br/>
         <span className="servicesTitle">Handle With Care Packages</span>
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