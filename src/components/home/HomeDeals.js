import React from "react";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faStar } from "@fortawesome/free-solid-svg-icons";

export default function HomeFeatured() {
  return (
    <section className="home-deals-sec">
      <Container>
        <div className='blue-title-sec'>
          <h2>deal of the day</h2>
        </div>  
        <div className="home-deals-strip">
          <h4><FontAwesomeIcon icon={faBolt} /> Daily Deals </h4>
          <p>Ending in: 2h 24m 12s <span>09</span></p>
        </div>      
      </Container>
      <Row>
        <Col md={4}>
          <div className="home-deals-box">
            <span className="home-deals-sale">51%</span>
            <div className="home-deals-img">
              <img src="/img/product-image-2.png" alt="" />
            </div>
            <div className="home-deals-text">
              <div className="p-3">
                <h3>H11 Off-Road Milkyway</h3>
                <h5><img src="/img/reviews.png" alt="reviews" /> 4.8 <span>|</span> 407 Reviews</h5>
              </div>
              <hr />
              <div className="p-3">
                <h4><s>₹34,999.00</s> ₹20,999.00</h4>
                <p>You Save ₹ 621 (51%)</p>
                <a className="btn btn-blue">Add to cart</a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <div className="home-deals-box">
            <span className="home-deals-sale">51%</span>
            <div className="home-deals-img">
              <img src="/img/product-image-2.png" alt="" />
            </div>
            <div className="home-deals-text">
              <div className="p-3">
                <h3>H11 Off-Road Milkyway</h3>
                <h5><img src="/img/reviews.png" alt="reviews" /> 4.8 <span>|</span> 407 Reviews</h5>
              </div>
              <hr />
              <div className="p-3">
                <h4><s>₹34,999.00</s> ₹20,999.00</h4>
                <p>You Save ₹ 621 (51%)</p>
                <a className="btn btn-blue">Add to cart</a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <div className="home-deals-box">
            <span className="home-deals-sale">51%</span>
            <div className="home-deals-img">
              <img src="/img/product-image-2.png" alt="" />
            </div>
            <div className="home-deals-text">
              <div className="p-3">
                <h3>H11 Off-Road Milkyway</h3>
                <h5><img src="/img/reviews.png" alt="reviews" /> 4.8 <span>|</span> 407 Reviews</h5>
              </div>
              <hr />
              <div className="p-3">
                <h4><s>₹34,999.00</s> ₹20,999.00</h4>
                <p>You Save ₹ 621 (51%)</p>
                <a className="btn btn-blue">Add to cart</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
