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
						<p className="subtitle"></p>
						<h1 className="bold-title">Contactless Visitor System</h1>
						<p className="title-text">An innovative approach to make a great first impression, increase, effciency and ensure safety & security</p>
						<div>
                        <Link to={'/howitworks'}>
                        <button className='body-btn'>Learn More</button>
                        </Link>
						</div>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Header;