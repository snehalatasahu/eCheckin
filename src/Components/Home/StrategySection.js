import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import strategy_1 from "../../Assets/strategy-1.png";
import strategy_2 from "../../Assets/strategy-2.png";
import strategy_3 from "../../Assets/strategy-3.png";
import strategy_4 from "../../Assets/strategy-4.png";
import strategy_section_bg from "../../Assets/strategy-section-bg.png";

const StrategySection = () => {
    return (
        <Container className="strategy-section">
            {/* <img className="strategy-section-bg-graphics-section" src={strategy_section_bg} /> */}
            <Row className="container strategy-container">
                <Col md={3} s={12}className="strategy-card-section">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_1} />
                        </div>
                        <h2 className='subtitle'>Strategy</h2>
                        <p className='title-text'>We'll work with you to develop the right strategy</p>
                    </div>
                </Col>
                <Col md={3} s={12}className="strategy-card-section">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_2} />
                        </div>
                        <h2 className='subtitle'>Automation</h2>
                        <p className='title-text'>Work synchronization and automated services</p>
                    </div>
                </Col>
                <Col md={3} s={12}className="strategy-card-section">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_3} />
                        </div>
                        <h2 className='subtitle'>Deployment</h2>
                        <p className='title-text'>Dedicated servers to deploy and test applications</p>
                    </div>
                </Col>
                <Col md={3} s={12}className="strategy-card-section">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_4} />
                        </div>
                        <h2 className='subtitle'>Education</h2>
                        <p className='title-text'>Stay informed on all our tools and technologies</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default StrategySection;