import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserhistory} from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" path="/about" component={About} />
          <Route name="projects" path="/projects" component={Projects} />
          <Route name="resume" path="/resume" component={Resume} />
          <Route name="contact" path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App;
