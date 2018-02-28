import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {Nav, Navbar} from 'react-bootstrap';

class NavBar extends Component {
  render(){
    return(
      <header>
        <div id="headerButtons">
          <span className="navButton"><Link to="">Home</Link></span>
          <span className="navButton"><Link to="">About Me</Link></span>
          <span className="navButton"><Link to="">My Projects</Link></span>
          <span className="navButton"><Link to="">Resume</Link></span>
          <span className="navButton"><Link to="">Follow Me</Link></span>
        </div>
      </header>
    )
  }
}

export default NavBar;
