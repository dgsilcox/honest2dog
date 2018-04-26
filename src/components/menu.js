import React, { Component } from 'react';
import Dropdown, {DropdownTrigger,DropdownContent} from 'react-simple-dropdown'


export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <span>
         <Dropdown>
               <DropdownTrigger><img src="img/menu-512.png"/></DropdownTrigger>
               <DropdownContent>
                 <ul>
                   <li><a href="/home">home</a></li>
                   <li><a href="/mission">mission</a></li>
                   <li><a href="/about">about</a></li>
                   <li><a href="/services">services</a></li>
                   <li><a href="/professionals">professionals</a></li>
                 </ul>
               </DropdownContent>
          </Dropdown>
          </span>
      </div>

    );
  }
}