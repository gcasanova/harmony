import React from 'react'
// import Carousel from 'nuka-carousel';
import Slider from 'react-slick'
import { Image } from 'react-bootstrap'

import carouselImage1 from '../../public/images/elha-carousel.jpg'
import carouselImage2 from '../../public/images/elha-carousel-2.jpg'

// EXTERNAL IMPORTS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Carousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 2000,
            autoplaySpeed: 5000,
            fade: true,
            autoplay: true,
            adaptiveHeight: true,
            pauseOnHover: false
        };

        return (
            <Slider {...settings}>
                <div>
                    <Image width={'100%'} src={carouselImage1} />
                </div>
                <div>
                    <Image width={'100%'} src={carouselImage2} />
                </div>
            </Slider>
        );
    }
}

// export default class extends React.Component {
//     render() {
//         return (
//             <Carousel autoplay={true} speed={6000} transitionMode={'fade'} wrapAround={true}>
//                 <Image src={carouselImage1} />
//                 <Image src={carouselImage2} />
//             </Carousel>
//         );
//     }
// }

export default Carousel
