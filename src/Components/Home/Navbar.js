import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar' sticky='top'>
      <Row className="navitem">
        <Col>
          <Navbar.Brand href="/"><h1 className='navbrand'>eCheckin</h1></Navbar.Brand>
        </Col>
        <Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link  href="#Header"><h6 className="navtxt">Home</h6></Nav.Link>
              <Nav.Link  href="#StrategySection"><h6 className="navtxt">How It Works</h6></Nav.Link>
              <Nav.Link  href="#Carousel"><h6 className="navtxt">Clients</h6></Nav.Link>
              <Nav.Link  href="#Cards"><h6 className="navtxt">Features</h6></Nav.Link>
              <Nav.Link  to="/Contact"><h6 className="navtxt">Contact</h6></Nav.Link>              
            </Nav>
            <Nav ><button className='btn-custom'  href="Demo">Book A Demo</button></Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Navbar>
  );
};

export default NavBar;