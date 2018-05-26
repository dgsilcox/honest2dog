import React, { Component } from 'react';
import Dropdown, {DropdownTrigger,DropdownContent} from 'react-simple-dropdown'


export default class Menu extends Component {


constructor() {
    super();
    this.state = {
      width:  window.innerWidth,
      height: window.innerHeight
    }
  }
 /**
   * Add event listener
   */
   updateDimensions() {
     this.setState({width: window.innerWidth, height: window.innerHeight});
   }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  render() {
  if(window.innerWidth < 500) {
    return (
      <div className="menu">
        <span>
         <Dropdown>
               <DropdownTrigger><img src="img/menu-512.png"/>{/*Menu*/}</DropdownTrigger>
               <DropdownContent>
                 <ul>
                   <li><a href="/home">home</a></li>
                   <li><a href="/services">services</a></li>
                   <li><a href="/professionals">professionals</a></li>
                   {/* <li><a href="/mission">mission</a></li> */}
                   <li><a href="/about">about</a></li>
                 </ul>
               </DropdownContent>
          </Dropdown>

          </span>
      </div>
    );
    } else {
          return (
            <div className="menu">
            <span className="menuItem"><a href="/home">home</a></span>
            <span className="menuItem"><a href="/services">services</a></span>
            <span className="menuItem"><a href="/professionals">professionals</a></span>
           {/* <span className="menuItem"><a href="/mission">mission</a></span>  */}
            <span className="menuItem"><a href="/about">about</a></span>
            </div>
          );
     }
  }
}