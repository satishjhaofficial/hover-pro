import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

export default function LogoSlider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
          slidesToSlide: 1 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1199 },
          items: 6,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1199, min: 767 },
          items: 4,
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
        <section className='home-logo-sec'>
            <Container>
                <div className='home-logo-slider'>
                <Carousel 
                    showDots={false}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    ssr={true}
                    responsive={responsive}
                    >
                        <div className="home-logo-box">
                            <Image
                                src="/img/ndtv.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                        <div className="home-logo-box">
                            <Image
                                src="/img/zee-news.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                        <div className="home-logo-box">
                            <Image
                                src="/img/ht-city.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                        <div className="home-logo-box">
                            <Image
                                src="/img/indian-express.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                        <div className="home-logo-box">
                            <Image
                                src="/img/ndtv.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                        <div className="home-logo-box">
                            <Image
                                src="/img/zee-news.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                        <div className="home-logo-box">
                            <Image
                                src="/img/ht-city.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                        <div className="home-logo-box">
                            <Image
                                src="/img/indian-express.png"
                                alt="Stubby Holder"
                                objectFit="contain"
                                width={150}
                                height={80}
                            />
                        </div>
                    </Carousel>
                </div>
            </Container>
        </section>
    );
}