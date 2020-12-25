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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link  href="#home"><h6 className="navtxt">Home</h6></Nav.Link>
              <Nav.Link  href="#features"><h6 className="navtxt">How It Works</h6></Nav.Link>
              <Nav.Link  href="#features"><h6 className="navtxt">Clients</h6></Nav.Link>
              <Nav.Link  href="#pricing"><h6 className="navtxt">News</h6></Nav.Link>
              <Nav.Link  href="#pricing"><h6 className="navtxt">Contact</h6></Nav.Link>              
            </Nav>
            <Nav ><button className='btn-custom'  href="#pricing">Book A Demo</button></Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Navbar>
  );
};

export default NavBar;