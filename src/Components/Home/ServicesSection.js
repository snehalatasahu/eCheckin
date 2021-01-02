import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import services_section_bg from "../../Assets/services-section-bg.png";
import services_header from "../../Assets/reception-bg.png";
import services_sales_header from "../../Assets/meet-bg.png";


const ServicesSection = () => {
    return (

        <Container className="services-section">
            {/* <div className="services-section-bg-graphics">
                <img src={services_section_bg} />
            </div> */}
            <Row className="container services-container">
                <Col md={6} s={12} className="services-title-section">
                    
                    <h2 className="title">Walk in visitors</h2>
                    <p className="subtitle">How does it work?</p>
                    <ul className="title-text">
                        <li>Scan QR Code at the Front desk/Reception.</li>
                        <li>Enter & verify your Phone Number. Fill your details & click a selfie via
                        Registration form on the smartphone.</li>
                        <li>Complete check-in and receive E-badge/ E-Pass.</li>
                    </ul>

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

						<h2 className="title">Schedule a meeting</h2>
                        <p className="subtitle">How does it work?</p>
						<ul className="title-text">
                            <li>Log-in to the portal.</li>
                            <li>Click 'schedule a meeting' tab to schedule a meeting.</li>
                            <li>Fill your visitor details.</li>
                            <li>Add time and date.</li>
                            <li>After scheduling the meeting, the visitor will get a notification 
                                on the phone and mail for the schduled meeting.</li>
                        </ul>
						<div>
                        <button className='body-btn'  href="#pricing">Learn more</button>
						</div>
					</Col>
			</Row>
        </Container>
    );
};

export default ServicesSection;