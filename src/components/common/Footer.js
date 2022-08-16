
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import ScrollToTop from "./ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer-row">
            <Row>
              <Col md={4}>
                <div className='footer-box-1'>
                  <div className='blue-title-sec'>
                    <h2>Come along for the ride</h2>
                  </div> 
                  <p>Join us on our journey to ride fearless. Sign up to our newsletter to see behind the scenes and be first in on exciting new deals.</p>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type='email'
                      placeholder='e-mail address'
                      aria-describedby="basic-addon1"
                    />
                    <Button type='submit' id="button-addon1"><img src='/img/newsletter.png' alt='' /></Button>
                  </InputGroup>
                </div>
              </Col>
              <Col md={4}>
                <div className='footer-box-2'>
                    <Row>
                      <Col xs={6}>
                        <img src='/img/logo-white.png' alt='Hoverpro' />
                      </Col>
                      <Col xs={6}>
                        <img src='/img/google-rating.png' alt='Google' />
                      </Col>
                      <Col xs={6}>
                        <ul className='footer-social'>
                          <li><a href='#' target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                          <li><a href='#' target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                          <li><a href='#' target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                      </Col>
                      <Col xs={6}>
                        <img src='/img/razorpay.png' alt='Razorpay' />
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={4}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>About Hoverpro</Accordion.Header>
                    <Accordion.Body>
                      <p>Hoverpro is India’s no. 1 mobility solutions company, specializing in self-balancing scooters.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Customer Services</Accordion.Header>
                    <Accordion.Body>
                      <p>Hoverpro is India’s no. 1 mobility solutions company, specializing in self-balancing scooters.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Product Categories</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><Link href="#">Product 1</Link></li>
                        <li><Link href="#">Product 2</Link></li>
                        <li><Link href="#">Product 3</Link></li>
                        <li><Link href="#">Product 4</Link></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="copyright">
          <Container>
            <Row className='align-items-center'>
              <Col lg={6}>
                <img src="/img/payment-options.png" alt="payment-options" />
              </Col>
              <Col lg={6}>
                <p>©2021 Hover Pro. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
      <div className='fixed-chat-box'>
        <Link href="#" target="_blank"><a><FontAwesomeIcon icon={faWhatsapp} /> Chat With Us!</a></Link>
      </div>
    </>
  );
}

export default Footer;
