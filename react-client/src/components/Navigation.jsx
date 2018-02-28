import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  render(){
    return(
      <header>
        <div id="headerButtons">
          <Navbar>
            <Nav pullLeft>
              <NavItem eventKey={1} href="/"><strong>Home</strong></NavItem>
              <NavItem eventKey={2} href="/about"><strong>About Me</strong></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/projects"><strong>My Projects</strong></NavItem>
              <NavItem eventKey={2} href="/resume"><strong>My Resume</strong></NavItem>
              <NavItem eventKey={3} href="/contact"><strong>Follow Me</strong></NavItem>
            </Nav>
          </Navbar>
        </div>
      </header>
    )
  }
}

export default Navigation;
