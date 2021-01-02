import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import image3 from "../../Assets/2way.png";
import image1 from "../../Assets/photo-notification.png";
import image2 from "../../Assets/check-out-with-bg.png";

const Cards = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <div style={{ textAlign: "center" }} className="clients-title-section">
        <h2 className="title">Secure your Premises</h2>
        <p className="title-text">
          Security measures to protect business &
          clients from cyber threats, ensure their privacy and protect their data.
        </p>
      </div>
      <Row>
        <Col lg={4} md={12}>
          <Card bsPrefix="cards" className="cards-centre">
            <Card.Img style={{ padding: "30px" }} classname="card-img" variant="top" src={image1} />
            <Card.Body>
              <Card.Title className="subtitle"></Card.Title>
              <Card.Text className="title-text"></Card.Text>
              <button
                className="btn-custom cards-btn card-btn-1"
              >
                Approval Based Entry
              </button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={12}>
          <Card bsPrefix="cards" className="cards-centre">
            <Card.Img style={{ padding: "30px" }} classname="card-img" variant="top" src={image2} />
            <Card.Body>
              <Card.Title className="subtitle">
              </Card.Title>
              <Card.Text className="title-text"></Card.Text>
              <button className="btn-custom cards-btn card-btn-2">
                Check Out
              </button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={12}>
          <Card bsPrefix="cards" className="cards-centre">
            <Card.Img style={{ padding: "30px" }} classname="card-img" variant="top" src={image3} />
            <Card.Body>
              <Card.Title className="subtitle"></Card.Title>
              <Card.Text className="title-text"></Card.Text>
              <button className="btn-custom cards-btn card-btn-3">
                NDA/Policy Signing
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
