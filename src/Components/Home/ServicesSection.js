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
                    <p className="subtitle">Our services</p>
                    <h2 className="title">Solving Problems</h2>
                    <p className="title-text">This is a great section to introduce your company and showcase your featured services.</p>
                    <div className="services-accordion">
                        <div><button className="btn-services">&emsp;Website Design</button>
                        </div>
                        <div>
                            <button className="btn-services">
                            &emsp;Application Development</button>
                        </div>
                    </div>
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
						<p className="subtitle">Our services</p>
						<h2 className="title">Sales Growth</h2>
						<p className="title-text">You can talk about your secondary services here, or maybe promote your excellent customer service approach. Always grab your website visitors' attention.</p>
						<div>
                        <button className='body-btn'  href="#pricing">View Pricing</button>
						</div>
					</Col>
			</Row>
        </Container>
    );
};

export default ServicesSection;