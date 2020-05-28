import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Arrow from '../components/Arrow'

// IMAGES
// import Img1 from '../img/home-images/1.png'
// import Img2 from '../img/home-images/2.png'
// import Img3 from '../img/home-images/3.png'
import Texture from '../img/texture.png'

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
                <div className='main-text-block fadeInDownHomeText animatedDownHomeText'>
                </div>
            </div>
        </Container>

        <Container fluid className='first-header'>
            <Row className='animatedUp fadeInUp'>
                <Col md={12}>
                    <div>
                    <h2 className='heading-text text-center text-white'>
                        <FaHome size={30} className='custom-icon' />
                        <strong>O NAS</strong>
                    </h2>
                    </div>
                    <div className='border-block' />
                </Col>
            </Row>
        </Container>
        </>
    )
}
