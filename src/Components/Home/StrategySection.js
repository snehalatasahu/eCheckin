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

                <Col md={2} s={12}className="strategy-card-section strategy-col">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_1} />
                        </div>
                        <h2 className='subtitle'>Facial Mask Screening</h2>
                        <p className='title-text'></p>
                    </div>
                </Col>

                <Col md={2} s={12}className="strategy-card-section strategy-col">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_2} />
                        </div>
                        <h2 className='subtitle'>Schedule meetings</h2>
                        <p className='title-text'></p>
                    </div>
                </Col>

                <Col md={2} s={12}className="strategy-card-section strategy-col">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_3} />
                        </div>
                        <h2 className='subtitle'>Aadhar verification</h2>
                        <p className='title-text'></p>
                    </div>
                </Col>
                
                <Col md={2} s={12}className="strategy-card-section strategy-col">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_4} />
                        </div>
                        <h2 className='subtitle'>Touchless Check-in</h2>
                        <p className='title-text'></p>
                    </div>
                </Col>
                
                <Col md={2} s={12}className="strategy-card-section strategy-col">
                    <div className="strategy-card">
                        <div className="strategy-card-icon-section">
                            <img src={strategy_1} />
                        </div>
                        <h2 className='subtitle'>COVID screening and questionnaire</h2>
                        <p className='title-text'></p>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default StrategySection;