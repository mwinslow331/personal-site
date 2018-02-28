import React, {Component} from 'react';
import MyImage from '../components/MyImage';

class HomePage extends Component {
  render(){
    return(
      <div>
        <MyImage/>
        <h2>Michael Winslow</h2>
        <h4>Full Stack Engineer</h4>
      </div>
    )
  }
}

export default HomePage;
