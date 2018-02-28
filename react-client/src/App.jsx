import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserhistory} from 'react-router';
import Navigation from './components/Navigation';
import HomePage from './containers/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navigation />
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
