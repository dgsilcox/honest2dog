import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <table>
          <tr>
            <td><img src="img/level-1-badge.png" alt="Tag Teach Level 1"/></td>
            <td><img src="img/APDT_logo.jpg" alt="American Pet Dog Trainer"/></td>
            <td><img src="img/ccptd_img.jpg" alt="Certified Pet Dog Trainer"/></td>
            <td><img src="img/kpa-badge-ctp-150x97.png" alt="Karen Prior Academy"/></td>
            <td><img src="img/fear_free.png" alt="Fear Free 1"/></td>
            <td><img src="img/Fear-Free-Level2-Logo-On White.jpg"  alt="Fear Free 2"/></td>
          </tr>
        </table>
      </div>
    );
  }
}