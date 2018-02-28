import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class MyImage extends Component {
  render(){
    return(
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src="FullSizeRender-4.jpg" circle/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MyImage;
