import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomeIcons() {
  return (
    <section className="home-icons-sec">
      <Container>
        <Row>
          <Col xs={3}>
            <div className="home-icons-box">
                <img src="/img/emi.png" alt="Easy Emi Available" />
                <h3>Easy Emi Available</h3>
            </div>
          </Col>
          <Col xs={3}>
            <div className="home-icons-box">
                <img src="/img/free-shipping.png" alt="Free Shipping in India" />
                <h3>Free Shipping in India</h3>
            </div>
          </Col>
          <Col xs={3}>
            <div className="home-icons-box">
                <img src="/img/warranty.png" alt="1 Year Exclusive Warranty" />
                <h3>1 Year Exclusive Warranty</h3>
            </div>
          </Col>
          <Col xs={3}>
            <div className="home-icons-box">
                <img src="/img/cash-on-delivery.png" alt="Cash on Delivery" />
                <h3>Cash on Delivery</h3>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}
