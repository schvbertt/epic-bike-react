import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Home1 from '../components/Home1'

// IMAGES
import Img1 from '../img/text1.png'
import Img2 from '../img/text2.png'

// ICONS
import {FaHome} from 'react-icons/fa'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Epic Bike - Serwis Rowerowy'
      }, [])

    return (
        <>
        <Container fluid className='fix-main-pic animatedDownHomeImg fadeInDownHomeImg'>
            <div className='main-pic'>
                <div className='main-text-block animatedDownHomeText fadeInDownHomeText'>
                    <a href='#home'>
                    <img src={Img1} className='img-home1' alt='serwis rowerowy'/>
                    </a>

                    <a href='#home'>
                    <img src={Img2} className='img-home2' alt='serwis rowerowy bielsko-biala' />
                    </a>
                </div>
            </div>
        </Container>

        <Container id='home' className='first-header'>
            <Row className='animatedUp fadeInUp'>
                <Col md={12}>
                    <div>
                    <h2 className='heading-text'>
                        <FaHome size={30} className='custom-icon' />
                        <strong>O NAS</strong>
                    </h2>
                    </div>
                    <div className='border-block' />
                </Col>
            </Row>
            <Row className='animatedUp fadeInUp mt-3'>
                <Home1 />
            </Row>
        </Container>
        </>
    )
}
