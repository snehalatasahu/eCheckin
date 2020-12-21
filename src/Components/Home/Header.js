import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import header from "../../Assets/header.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <Container className="header">
            <Row>
                <Col md={6} s={12} >
                    <img className="header-image" src={header} alt="header" />
                </Col>
                <Col md={6} s={12}>
                    <div className='headertext'>
						<p className="subtitle">Multipurpose landing template</p>
						<h1 className="bold-title">Beautifully simple, code.</h1>
						<p className="title-text">Codelander is a beautifully simple, clean and lightweight landing page template for all types of businesses, with bold and bright colours.</p>
						<div>
                        <Link to={'/howitworks'}>
                        <button className='body-btn'>How it Works</button>
                        </Link>
						</div>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Header;