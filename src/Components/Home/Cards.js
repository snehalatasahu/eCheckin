import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import image from "../../Assets/blog-card-2.png";

const Cards = () => {
  return (
    <Container style={{padding:'30px'}}>
                    <div style={{textAlign:'center'}}className="clients-title-section">
						
						<h2 className="title">Secure your Premises</h2>
            <p className="subtitle">Put appropriate security measures in place to protect your business & your people, regardless of
what kind of premises you operate from.</p>
					</div>
        <Row>

       
      
      <Col md={4} s={12}>
      <Card bsPrefix='cards' className="cards-centre">
        <Card.Img style={{padding:'30px'}}variant="top" src={image} />
        <Card.Body>
          <Card.Title className='subtitle'>APPROVAL BASED ENTRY</Card.Title>
          <Card.Text className='title-text'>

          </Card.Text>
          <button style={{marginLeft:'4.2rem'}} className="btn-custom cards-btn">Read More</button>
          
        </Card.Body>
      </Card>
      </Col>


      <Col md={4} s={12}>
      <Card bsPrefix='cards' className="cards-centre">
        <Card.Img style={{padding:'30px'}}variant="top" src={image} />
        <Card.Body>
          <Card.Title className='subtitle'>CLICK VISITOR PICTURES</Card.Title>
          <Card.Text className='title-text'>

          </Card.Text>
          <button style={{marginLeft:'4.2rem'}} className="btn-custom cards-btn">Read More</button>
          
        </Card.Body>
      </Card>
      </Col>


      <Col md={4} s={12}>
      <Card bsPrefix='cards' className="cards-centre">
        <Card.Img style={{padding:'30px'}}variant="top" src={image} />
        <Card.Body>
          <Card.Title className='subtitle'>CHECK OUT</Card.Title>
          <Card.Text className='title-text'>

          </Card.Text>
          <button style={{marginLeft:'4.2rem'}} className="btn-custom cards-btn">Read More</button>
          
        </Card.Body>
      </Card>
      </Col>



      </Row>
    </Container>
  );
};

export default Cards;
