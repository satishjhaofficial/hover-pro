import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollToTop from "./ScrollToTop";
import FooterMenu from '../../../lib/json-files/FooterMenu.json'

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container fluid>
        <Row xs={1} md={2} lg={4}>
          <Col>
            <div className="footer-box">
              <h3>Contact us</h3>
              <p>Monday - Friday: 10:00 - 18:00</p>
              <p><strong>P:- <span itemProp="telephone"><a href="tel:0386579428">03 8657 9428</a></span></strong></p>
              <p><strong>E:- <span itemProp="email"><a href="mailto:info@printyo.net.au">info@printyo.net.au</a></span></strong></p>
              <p itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress"><span itemProp="streetAddress">Suite 6, 17 Comalco Ct</span>, <span itemProp="addressLocality">Thomastown, VIC</span> 3074</p>
              <div className="footer-social">
                <a className="fb-icon" href="https://www.facebook.com/PrintyoAustralia/" title="Facebook" target="_blank" rel="noreferrer"></a>
                <a className="twitter-icon" href="https://twitter.com/printyo_aus" title="Twitter" target="_blank" rel="noreferrer"></a>
                <a className="youtube-icon" href="https://www.youtube.com/channel/UC1QWa9BMRdn0VpLuBDifhBA" title="Youtube" target="_blank" rel="noreferrer"></a>
                <a className="instagram-icon" href="https://www.instagram.com/printyoaustralia/" title="instagram" target="_blank" rel="noreferrer"></a>
              </div>
                <p>We Accept</p>
                <Image src="/img/master-card.png" width={234} height={32} alt="Mastercard" />
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <h3>Explore</h3>              
                <ul>
                  {FooterMenu[0].explore.map((items, i) => (
                    <li key={i}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /><Link href={`/${items.menulink}`}>{items.menuname}</Link>
                  </li>
                  )
                  )
                }                  
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <h3>Resources</h3>
              <ul>
                {FooterMenu[1].resources.map((items, i) => (
                  <li key={i}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} /><Link href={`/${items.menulink}`}>{items.menuname}</Link>
                </li>
                )
                  )
                }                  
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <h3>Our Products</h3>
              <ul>
                {FooterMenu[2].products.map((items, i) => (
                  <li key={i}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} /><Link href={`/${items.menulink}`}>{items.menuname}</Link>
                </li>
                )
                  )
                }                  
              </ul>
            </div>
          </Col>
        </Row>
        </Container>
        
        <div className="copyright">
          <Container>
            <p><span>Printyo.co.uk</span> | <span>© Copyright 2017- 2022 All Rights Reserved.</span></p>
          </Container>
        </div>
        <ScrollToTop />
      </footer>
    </>
  );
}

export default Footer;
