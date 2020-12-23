import React from 'react';
import { Jumbotron, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillMail, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <Jumbotron bsPrefix="footer-section">
            <Row className="footer-container">
                <Col md={2} s={12}></Col>
                <Col md={2} s={12}>
                    <h1 style={{color: "white"}} className='bold-title'>eCheckin</h1>
                    <p className="footer-susection-text">A beautiful landing page template by Codefest.</p>
                </Col>
                <Col md={2} s={12}>
                    <div className="footer-subsection-2-1">
                        <h3 className="footer-subsection-title">About</h3>
                        <p className="footer-subsection-text">We like to do business at Codelander HQ to our clients' satisfaction.</p>
                    </div>
                </Col>
                <Col md={2} s={12}>
                    <h3 className="footer-subsection-title">Contact Us</h3>
                    <ul className="footer-subsection-list">
                        <p><AiFillMail/>&ensp;123 Business Centre<br />London SW1A 1AA</p>
                        <p><IoCall/>&ensp;0123456789</p>
                        <p><IoLocationSharp/>&ensp;mail@domain.com</p>
                    </ul>
                </Col>

                <Col md={2} s={12}>
                    <div className="footer-subsection-2-2">
                        <h3 className="footer-subsection-title">Socials</h3>
                        <div className="footer-social-media-icons-section">
                            <AiOutlineTwitter/>&nbsp;
                            <GrInstagram/>&nbsp;
                            <FaFacebookF/>&nbsp;
                            <AiFillLinkedin/>
                        </div>
                    </div>
                </Col>
                <Col md={2} s={12}></Col>
            </Row>

            <div style={{paddingTop: "10px", paddingBottom:'20px'}}>
                <p style={{textAlign: "center"}}>© 2020 <a href="https://www.codefest.co.uk" target="_blank" title="Codefest">Codefest</a>™. All Rights Reserved.</p>
            </div>
        </Jumbotron>
    );
};

export default Footer;