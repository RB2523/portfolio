
 import React , { Component } from "react";
 import {slide as Menu} from "react-burger-menu";
import { Link} from "react-router-dom";

import { withRouter } from "react-router-dom";

 import "./NavBar.css";

  class NavBar extends Component {
 
      render(){
         
          const path = this.props.location.pathname;

         const homeClass = path === '/portfolio' ? 'active-item'  :'';
         const aboutClass = path === '/about' ? 'active-item'  : '';
         const projectsClass = path === '/projects' ? 'active-item'  :'' ;
         const skillsClass = path === '/skills' ? 'active-item'  :'';
         const contactClass = path === '/contact' ? 'active-item'  :'';
         
         return (
             <Menu>
                 <Link className={`menu-item ${homeClass}`} to="/portfolio"> Home </Link>
                 <Link className={`menu-item ${aboutClass} `} to="/about"> About </Link>
                 <Link className={`menu-item ${projectsClass}`} to="/projects">  Projects </Link>
                 <Link className={`menu-item ${skillsClass}`} to="/skills"> Skills </Link>
                 <Link className={`menu-item ${contactClass} `} to="/contact"> Contact </Link>
             </Menu>
         );
     }
  }

  export default  withRouter(NavBar);