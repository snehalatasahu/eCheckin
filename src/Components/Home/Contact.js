import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import contact_header_image from "../../Assets/contact-header-img.png";

const Contact = () => {
    return (
        <Container className="contact-section">
            <Row className="contact-container">
                <Col md={6} s={12}>
                    <p className="subtitle">Contact</p>
                    <h2 className="title">Any Questions?<br />Get in touch</h2>
                    <p className="title-text">We'll be happy to help answer any of your questions. Send us an email and we'll get back to you shortly.</p>
                    <div>
                        <button className='body-btn'  href="#pricing">Send an Email</button>
						</div>
                </Col>
                <Col md={6} s={12}>
                    <img className="header-image" src={contact_header_image} alt="header" />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;