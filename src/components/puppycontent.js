import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (

      <div className="servicesPage">

        <div>
          <span className="servicesPageTitle">Puppy Training</span><br/><span className="servicesText">Puppies under 6 months</span>
        </div>
        <hr/>
        <div className="servicePageLeft">
          <img src="img/IMG_0393.jpg"/>
        </div>
        <div className="servicePageRight">

              <p>Puppy Training is focused on ...</p>
              <p>We will discuss the basic training you want your new puppy to have, what activities your new puppy might enjoy based on your pup’s personality and breed/mix.
              </p>
              <br/><br/><br/><br/><br/><br/><br/>
        </div>
        <div>
          <span className="clear"></span>
        </div>
        <div>
           <hr/>
           <span className="servicesPageTitle">Rates</span>
           <hr/>
         </div>

         <div>
         Initial Consult
         <br/>
         blah blah blah
         </div>

         <div>
         packages
         <table>
         <tr><td>3</td><td>5</td><td>7</td>
         </tr>
         </table>
         </div>

        <table>

          <tr>
            <td className="servicesTitle">Consult - 1 ½ hours</td>
            <td className="servicesText">Quick start training demo for your entire family.  Introductions to current family pets. ($125.00)</td>
          </tr>

          <tr>
            <td className="servicesTitle">1 hr custom follow up sessions</td>
            <td className="servicesText">Customized, one hour training sessions for you and any family members. Together we will select the skills you want your puppy to learn and design a training plan to get you on your way to a great relationship with your puppy.  ($100.00)</td>
          </tr>

          <tr>
            <td className="servicesTitle">Packages</td>
            <td className="servicesText">
                <ul>
                    <li>3 custom Sessions $285 (5% savings)</li>
                    <li>5 custom Sessions $450 (10% Savings)</li>
                    <li>7 custom Sessions $595 (15% Savings)</li>

                </ul>
            </td>
          </tr>

        </table>


      </div>

    );
  }
}