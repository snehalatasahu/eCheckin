import React from 'react';
import { Jumbotron, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillMail, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { IoLocationSharp, IoCall, IoGlobeOutline } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <Jumbotron bsPrefix="footer-section">
            <Row className="footer-container footer-text" style={{marginLeft:'0px', marginRight:'0px'}}>
                <Col lg={2} s={12} style={{paddingLeft:'0px', paddingRight:'0px'}}></Col>
                <Col lg={2} s={12} style={{paddingLeft:'0px', paddingRight:'0px'}}>
                    <h1 style={{color: "white"}} className='title'>eCheckin</h1>
                    <p className="footer-susection-text">Contactless Visitor System</p>
                </Col>
                <Col lg={2} s={12} style={{paddingLeft:'0px', paddingRight:'0px'}}>
                    <div className="footer-subsection-2-1">
                        <h3 className="footer-subsection-title">About</h3>
                        <p className="footer-subsection-text">An innovative approach to make a great first impression, increase, effciency and ensure safety & security</p>
                    </div>
                </Col>
                <Col lg={3} s={12} style={{paddingLeft:'0px', paddingRight:'0px'}}>
                    <h3 className="footer-subsection-title">Contact Us</h3>
                    <ul className="footer-subsection-list">
                        <p><AiFillMail/>&ensp;salestecboot.mumbai@gmail.com</p>
                        <p><IoGlobeOutline/>&ensp;website</p>
                    </ul>
                </Col>

                <Col lg={2} s={12} style={{paddingLeft:'0px', paddingRight:'0px'}}>
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
                <Col lg={2} s={12} style={{paddingLeft:'0px', paddingRight:'0px'}}></Col>
            </Row>

            <div style={{paddingTop: "10px", paddingBottom:'20px'}}>
                <p style={{textAlign: "center"}}>© 2020 <a target="_blank" title="Codefest">eCheckin</a>™. All Rights Reserved.</p>
            </div>
        </Jumbotron>
    );
};

export default Footer;