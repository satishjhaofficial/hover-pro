import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

export default function HomeBestSellers() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 1 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1199 },
          items: 4,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1199, min: 767 },
          items: 3,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };
    return (
        <section className='home-best-sec'>
            <Container>
              <div className='blue-title-sec'>
                <h2>Our Best Sellers</h2>
                <h3>Browse the Collection of our best selling products.</h3>
              </div>
            </Container>
                <div className='home-best-slider'>
                <Carousel 
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    ssr={true}
                    responsive={responsive}
                    >
                        <div className="home-best-box">
                            <img src="/img/product-image.png" alt='' />
                            <h3>H6+ Alien Hoverboard</h3>
                            <h5>₹12,999.00</h5>
                        </div>
                        <div className="home-best-box">
                            <img src="/img/product-image-2.png" alt='' />
                            <h3>H6+ Alien Hoverboard</h3>
                            <h5>₹12,999.00</h5>
                        </div>
                        <div className="home-best-box">
                            <img src="/img/product-image.png" alt='' />
                            <h3>H6+ Alien Hoverboard</h3>
                            <h5>₹12,999.00</h5>
                        </div>
                        <div className="home-best-box">
                            <img src="/img/product-image-2.png" alt='' />
                            <h3>H6+ Alien Hoverboard</h3>
                            <h5>₹12,999.00</h5>
                        </div>
                        <div className="home-best-box">
                            <img src="/img/product-image.png" alt='' />
                            <h3>H6+ Alien Hoverboard</h3>
                            <h5>₹12,999.00</h5>
                        </div>
                    </Carousel>
                </div>
        </section>
    );
}