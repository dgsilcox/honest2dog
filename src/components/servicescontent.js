import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="bodyText">
      <div className="services">
        <table>
          <tr className="oddRow">
            <td>Meet and Greet</td>
            <td>Just sayin hello.  Takes about an hour</td>
            <td>$200.00</td>
          </tr>

          <tr className="evenRow">
            <td>Training Classes</td>
            <td>Minimum of 5 students needed.  10 Classes a one class per week.</td>
            <td>$250.00/person </td>
          </tr>

          <tr className="oddRow">
            <td>Hourly Rates</td>
            <td></td>
            <td>$100.00</td>
          </tr>
        </table>
      </div>
      </div>
    );
  }
}