import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';


class MyImage extends Component {
  render(){
    return(
      <Grid>
        <Row className="profile-image">
          <Col sm={12}>
            <Image src="FullSizeRender.jpg" circle/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MyImage;
