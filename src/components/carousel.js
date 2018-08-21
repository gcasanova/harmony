import React from 'react';
import Carousel from 'nuka-carousel';
import { Image } from 'react-bootstrap';

import carouselImage1 from '../../public/images/elha-carousel.jpg';
import carouselImage2 from '../../public/images/elha-carousel-2.jpg';

export default class extends React.Component {
    render() {
        return (
            <Carousel autoplay={true} speed={4000} transitionMode={'fade'} wrapAround={true}>
                <Image src={carouselImage1} responsive />
                <Image src={carouselImage2} responsive />
            </Carousel>
        );
    }
}