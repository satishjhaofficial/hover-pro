
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import SliderList from '../../../lib/json-files/HomeSlider.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


export default function BannerSection() {
  return (
    <section className="hero-banner">
      <Carousel controls={false}>
        {SliderList.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              src={`${item.imgurl}`}
              alt="personalised-mugs-banner"
            />
            {item.caption?.map((items, i) => (
              <Carousel.Caption key={i}>
                <Container>
                  <h3>{items.title}</h3>
                  <p>{items.subTitle}</p>
                  <Link href={`${items.link}`}>
                    <a className="btn btn-blue"><FontAwesomeIcon icon={faPlay} /> Shop Now</a>
                  </Link>
                </Container>
              </Carousel.Caption>
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
