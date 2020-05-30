import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

// IMAGES
import ImgHome1 from '../img/home-images/1.png'
import ImgHome2 from '../img/home-images/2.png'
import ImgHome3 from '../img/home-images/3.png'

// ICONS
import {GrCaretNext} from 'react-icons/gr'
import {GrCaretPrevious} from 'react-icons/gr'
import {TiTick} from 'react-icons/ti'

export default function Home2() {
    return (
        <>
        <Col lg={7}>
        <Carousel 
        interval={3000}
        prevIcon={<GrCaretPrevious aria-hidden="true" className='carousel-icons' />}
        nextIcon={<GrCaretNext aria-hidden="true" className='carousel-icons' />}
        >

            <Carousel.Item>
                <img
                src={ImgHome1}
                className='d-block w-100'
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                src={ImgHome3}
                className='d-block w-100'
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                src={ImgHome2}
                className='d-block w-100'
                />
            </Carousel.Item>
        </Carousel>
        </Col>
        <Col lg={5}>
            <div className='home2-text-block'>
                <div className='home2-text'>
                    <div>
                        <TiTick />
                    </div>
                    <p>
                        Jesteśmy serwisem który sprosta wszelakim oczekiwaniom klientów, 
                        potwierdza to tysiące zadowolonych klientów, 
                        a dzięki naszemu ogromnemu doświadczeniu potrafimy doradzić nawet najbardziej wymagającej osobie.
                    </p>
                </div>

                <br />

                <div className='home2-text'>
                    <div>
                        <TiTick />
                    </div>
                    <p>
                        Nie potrafisz odnaleźć Twojego problemu na stronie?
                        A może masz szczegółowe pytania co do naszych usług? 
                        Jesteśmy otwarci na każde pytania, gwarantujemy, że nie zostawimy Państwa bez odpowiedzi,
                        a każdą odpowiedź postaramy się przedstawić w jak najbardziej zrozumiałej formie.
                    </p>
                </div>

                <br />

                <div className='home2-text'>
                    <div>
                        <TiTick />
                    </div>
                    <p>
                        Podczas naszej pracy używamy tylko i wyłącznie markowych jak i sprawdzonych narzędzi używanych przez najlepsze serwisy.
                    </p>
                </div>
            </div>
        </Col>
        </>
    )
}
