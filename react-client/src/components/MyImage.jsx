import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';


class MyImage extends Component {
  render(){
    return(
      <Row>
        <Col sm={12} md={8} lg={4}>
          <Image src="FullSizeRender.jpg" circle />
        </Col>
      </Row>
    )
  }
}

export default MyImage;
