import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";

const SecNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar' sticky='top'>
      <Row className="navitem">
        <Col>
          <Navbar.Brand><h1 className='navbrand'>How It Works?</h1></Navbar.Brand>
        </Col>
      </Row>
    </Navbar>
  );
};

export default SecNavbar;