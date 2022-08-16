import React from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

export default function HomeInsta() {
  return (
    <section className="home-insta-sec">
      <Container>
        <div className='blue-title-sec'>
          <h2>Customers Love Us!</h2>
        </div>      
        <InstagramFeed counter="6"/>  
        <div className="text-center mt-3">
          <Link href="#">
            <a className="btn btn-blue" target="_blank"><FontAwesomeIcon icon={faInstagram} /> View on instagram</a>
          </Link>
        </div>
      </Container>
      
    </section>
  );
}
