import React from "react";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function HomeFeatured() {
  return (
    <section className="home-featured-sec">
      <Container>
        <div className='blue-title-sec'>
          <h2>FEATURED COLLECTIONS</h2>
        </div>        
      </Container>
      <Row>
        <Col md={4}>
          <div className="home-featured-box">
            <div className="home-featured-img">
              <img src="/img/premimu-products.png" alt="" />
            </div>
            <div className="home-featured-text">
              <h3>PREMIUM PRODUCTS</h3>
              <Link href="#">
                <a className="btn btn-blue"><FontAwesomeIcon icon={faPlay} /> Shop Now</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-featured-box">
            <div className="home-featured-img">
              <img src="/img/outdoor-cruisers.png" alt="" />
            </div>
            <div className="home-featured-text">
              <h3>OUTDOORS CRUISERS</h3>
              <Link href="#">
                <a className="btn btn-blue"><FontAwesomeIcon icon={faPlay} /> Shop Now</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-featured-box">
            <div className="home-featured-img">
              <img src="/img/easy-to-drive.png" alt="" />
            </div>
            <div className="home-featured-text">
              <h3>EASY TO DRIVE</h3>
              <Link href="#">
                <a className="btn btn-blue"><FontAwesomeIcon icon={faPlay} /> Shop Now</a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
