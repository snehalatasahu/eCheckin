import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import services_section_bg from "../../Assets/services-section-bg.png";
import services_header from "../../Assets/services-header.png";
import services_sales_header from "../../Assets/services-sales-header.png";


const ServicesSection = () => {
    return (

        <Container className="services-section">
            {/* <div className="services-section-bg-graphics">
                <img src={services_section_bg} />
            </div> */}
            <Row className="container services-container">
                <Col md={6} s={12} className="services-title-section">
                    
                    <h2 className="title">Contactless Visitor Management</h2>
                    <p className="subtitle">How does it work?</p>
                    <p className="title-text">For walk in visitors/ clients/ Customers. Scan QR Code at
the Front desk/Reception. Enter & verify your Phone Number. Fill your details & click a selfie via
Registration form on the smartphone. Complete check-in and receive E-badge/ E-Pass.</p>

                    <button className='body-btn'  href="#pricing">Learn more</button>
                </Col>
                <Col md={6} s={12} >
                    <img className="services-header-img-section" src={services_header} />
                </Col>
            </Row>
            <Row  className="container services-container">
					<Col md={6} s={12} className="services-title-section">
						<img className="services-header-img-section" src={services_sales_header} />
					</Col>
					<Col md={6} s={12}>

						<h2 className="title">Scheduling a meeting</h2>
                        <p className="subtitle">How does it work?</p>
						<p className="title-text">For Pre Registration for a visitor.
                        log in on the portal.
                        Click 'schedule a meeting' tab to schedule a meeting.
                        Fill your visitor details.
                        Add time and date.
                        After scheduling the meeting,
                        the visitor will get a notification on the phone and mail for the meeting.
                        </p>
						<div>
                        <button className='body-btn'  href="#pricing">Learn more</button>
						</div>
					</Col>
			</Row>
        </Container>
    );
};

export default ServicesSection;