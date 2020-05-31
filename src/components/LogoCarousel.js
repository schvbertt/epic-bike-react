import React from 'react'
import Slider from "react-slick";
import Col from 'react-bootstrap/Col'

// LOGOS
import RockShox from '../img/logos/rock-shox.png'
import Marzocchi from '../img/logos/marzocchi.png'
import Parktool from '../img/logos/parktool.png'
import Fox from '../img/logos/fox.png'
import Bos from '../img/logos/bos.png'
import Dartmoor from '../img/logos/dartmoor.png'

export default function LogoCarousel() {
    const settings = {
        infinite: true,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: true,
        arrows: true,
        responsive: [
            // SMALL
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false
              }
            },
            // MEDIUM
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
            // LARGE
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },
        ]
    }
    return (
        <>
        <Col md={12} className='carousel-container'>
        <Slider {...settings}>
            <div className='carousel-img'>
                <img 
                src={RockShox}
                alt='RockShox'
                />
            </div>

            <div className='carousel-img'>
                <img 
                src={Marzocchi}
                alt='RockShox'
                />
            </div>

            <div className='carousel-img'>
                <img 
                src={Parktool}
                alt='RockShox'
                />
            </div>

            <div className='carousel-img'>
                <img 
                src={Fox}
                alt='RockShox'
                />
            </div>

            <div className='carousel-img'>
                <img 
                src={Bos}
                alt='RockShox'
                />
            </div>

            <div className='carousel-img'>
                <img 
                src={Dartmoor}
                alt='RockShox'
                />
            </div>
        </Slider>
        </Col>
        </>
    )
}
