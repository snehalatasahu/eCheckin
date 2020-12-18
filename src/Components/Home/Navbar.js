import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar' sticky='top'>
      <Row className="navitem">
        <Col>
          <Navbar.Brand href="#home"><h1 className='navbrand'>code.</h1></Navbar.Brand>
        </Col>
        <Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link  href="#home"><h5 className="navtxt">Home</h5></Nav.Link>
              <Nav.Link  href="#features"><h5 className="navtxt">Services</h5></Nav.Link>
              <Nav.Link  href="#pricing"><h5 className="navtxt">Pricing</h5></Nav.Link>
              <Nav.Link  href="#pricing"><h5 className="navtxt">Clients</h5></Nav.Link>
              <Nav.Link  href="#pricing"><h5 className="navtxt">News</h5></Nav.Link>
              <Nav.Link  href="#pricing"><h5 className="navtxt">Contact</h5></Nav.Link>
              
            </Nav>
            <Nav ><button className='btn-custom'  href="#pricing">Signup</button></Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Navbar>
  );
};

export default NavBar;