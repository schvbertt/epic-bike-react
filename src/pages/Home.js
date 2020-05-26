import React from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Arrow from '../components/Arrow'

// IMAGES
// import Img1 from '../img/home-images/1.png'
// import Img2 from '../img/home-images/2.png'
// import Img3 from '../img/home-images/3.png'
// import HomePage from '../img/home-images/homepage.png'
import Texture from '../img/texture.png'

// ICONS
import {FaHome} from 'react-icons/fa'

export default function Home() {
    return (
        <>
        <HelmetProvider>
        <Helmet>
            <title>Epic Bike - Serwis Rowerowy</title>
        </Helmet>
        </HelmetProvider>
        <Container fluid className='fix-main-pic animatedDownHomeImg fadeInDownHomeImg'>
            <div className='main-pic'>
                <div className='main-pic-text'>
                    <div className='flex-items-inside'>
                    {/*  SERWIS ROWEROW */}
                    <div className='positionimg animatedDownHomeText fadeInDownHomeText'>
                        <img src={Texture} className='text1' alt='texture' />
                        <h1 className='text11'>SERWIS<br />ROWEROWY</h1>
                    </div>
                    {/* BIELSKO - BIALA */}
                    <div className='positionimg fix-margin animatedDownHomeText fadeInDownHomeText'>
                        <img src={Texture} className='text2' alt='texture' />
                        <h2 className='text22'>BIELSKO - BIALA</h2>
                        <div className='fix-l'/>
                    </div>
                    </div>
                    <div className='animatedDownHomeArrow fadeInDownHomeArrow'>
                    <Arrow />
                    </div>
                </div>
            </div>
        </Container>

        <Container fluid className='first-header'>
            <Row className='animatedUp fadeInUp'>
                <Col md={12}>
                    <div>
                    <h4 className='h2 text-center text-white'>
                        <FaHome size={40} className='custom-home' />
                        O NAS
                    </h4>
                    </div>
                    <div className='border-block' />
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
        </>
    )
}
