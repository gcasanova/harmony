import React from 'react'
import Slider from 'react-slick'
import { Image } from 'react-bootstrap'

import carouselImage1 from '../../public/images/harmony-carousel.jpg'

// EXTERNAL IMPORTS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    fade: true,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: false
};

const Carousel = () => (
    <Slider {...settings}>
        <div>
            <Image width={'100%'} src={carouselImage1} />
        </div>
    </Slider>
)

export default Carousel
