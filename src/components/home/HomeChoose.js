import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomeChoose() {
  return (
    <section className="home-choose-sec">
      <Container>
        <div className="home-choose-row">
          <div className="home-choose-title">
            <h2>WHY CHOOSE HOVERPRO?</h2>
          </div>
          <Row>
            <Col md={6} lg={4}>
              <div className="home-choose-box">
                <div className="home-choose-box-title">
                  <img src="/img/choose-1.png" alt="" />
                  <h3>Finest Range of Products</h3>
                </div>
                <p>We have the exclusive range of the finest Hoverboards for sale in the market, engineered and designed to ensure a premium rider-experience. Our range of Hoverboards for sale qualifies several levels of intensive quality testing.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="home-choose-box">
                <div className="home-choose-box-title">
                  <img src="/img/choose-2.png" alt="" />
                  <h3>EXCLUSIVE TRENDY DESIGNS</h3>
                </div>
                <p>We offer our electric hoverboards and scooters that come along with a wide range of trend-setting designs and colour combinations that are set to leave an impressive impression on your friends & family in India.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="home-choose-box">
                <div className="home-choose-box-title">
                  <img src="/img/choose-3.png" alt="" />
                  <h3>EXTENDED WARRANTY OFFERS</h3>
                </div>
                <p>We offer seasonal, exciting offers and extended warranty benefits to ensure that our customers are offered the best-in-class post-sale services on the hoverboards on sale on our online store.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="home-choose-box">
                <div className="home-choose-box-title">
                  <img src="/img/choose-4.png" alt="" />
                  <h3>BUDGET-FRIENDLY PRICE RANGE</h3>
                </div>
                <p>We are committed to introducing economical electric hoverboards and mobility solutions to ensure that every individual can enjoy the trendy self-balancing hoverboards without experiencing a heavy blow to their budget.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="home-choose-box">
                <div className="home-choose-box-title">
                  <img src="/img/choose-5.png" alt="" />
                  <h3>BEST-IN-CLASS SAFETY STANDARDS</h3>
                </div>
                <p>Our exclusive range of products comes with reliable international & domestic safety standards. Rider safety is prioritized in all our electric hoverboard designs. No safety parameter or quality level is compromised.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="home-choose-box">
                <div className="home-choose-box-title">
                  <img src="/img/choose-6.png" alt="" />
                  <h3>FREE SHIPPING</h3>
                </div>
                <p>Besides offering our customers an easily accessible platform for buying hoverboards online, we provide free shipping to all parts of the country and ensure that they reach you safely within a limited time frame.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      
    </section>
  );
}
