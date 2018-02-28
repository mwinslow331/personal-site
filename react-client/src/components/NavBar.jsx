import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <header>
        <div id="headerButtons">
          <span className="navButton"><Link to="">Home</Link></span>
          <span className="navButton"><Link to="/about">About Me</Link></span>
          <span className="navButton"><Link to="/projects">My Projects</Link></span>
          <span className="navButton"><Link to="/resume">Resume</Link></span>
          <span className="navButton"><Link to="/contact">Follow Me</Link></span>
        </div>
      </header>
    )
  }
}

export default NavBar;
