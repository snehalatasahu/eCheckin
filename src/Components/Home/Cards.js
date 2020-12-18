import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import image from "../../Assets/blog-card-2.png";

const Cards = () => {
  return (
    <Container style={{padding:'30px'}}>
                    <div style={{textAlign:'center'}}className="clients-title-section">
						<p className="subtitle">Recent Updates</p>
						<h2 className="title">Featured Stories</h2>
					</div>
        <Row>

        <Col md={4} sm={12}>
      <Card bsPrefix='cards'>
        <Card.Img style={{padding:'30px'}}variant="top" src={image} />
        <Card.Body>
          <Card.Title className='subtitle'>Card Title</Card.Title>
          <Card.Text className='title-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button style={{marginLeft:'4.2rem'}} className="btn-custom">Read More</button>
          
        </Card.Body>
      </Card>
      </Col>
      <Col md={4} sm={12}>
      <Card bsPrefix='cards'>
        <Card.Img style={{padding:'30px'}}variant="top" src={image} />
        <Card.Body>
          <Card.Title className='subtitle'>Card Title</Card.Title>
          <Card.Text className='title-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button style={{marginLeft:'4.2rem'}} className="btn-custom">Read More</button>
          
        </Card.Body>
      </Card>
      </Col>
      <Col md={4} sm={12}>
      <Card bsPrefix='cards'>
        <Card.Img style={{padding:'30px'}}variant="top" src={image} />
        <Card.Body>
          <Card.Title className='subtitle'>Card Title</Card.Title>
          <Card.Text className='title-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button style={{marginLeft:'4.2rem'}} className="btn-custom">Read More</button>
          
        </Card.Body>
      </Card>
      </Col>

      </Row>
    </Container>
  );
};

export default Cards;
