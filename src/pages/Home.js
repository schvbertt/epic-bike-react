import React, {useEffect} from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Arrow from '../components/Arrow'

// IMAGES
// import Img1 from '../img/home-images/1.png'
// import Img2 from '../img/home-images/2.png'
// import Img3 from '../img/home-images/3.png'
import HomePage from '../img/home-images/homepage.png'
import Texture from '../img/texture.png'

// ICONS
import {FaHome} from 'react-icons/fa'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <HelmetProvider>
        <Helmet>
            <title>Epic Bike - Serwis Rowerowy</title>
        </Helmet>
        </HelmetProvider>
        <Container fluid className='fix-main-pic animatedDownHomeImg fadeInDownHomeImg'>
            <div className='main-pic'>
                <div className='main-text-block fadeInDownHomeText animatedDownHomeText'>
                    {/* TEXT 2 */}
                    <div>
                        <img src={Texture} alt='serwis rowerowy' className='img11' />
                        <h1 className='text11'>
                            <span>
                            SERWIS
                            </span><br />
                            ROWEROWY
                            </h1>
                        <Arrow className='animatedDownHomeArrow fadeInDownHomeArrow'/>
                    </div>
                    {/* TEXT 1 */}
                    <div className='margin-fix'>
                        <img src={Texture} alt='serwis rowerowy' className='img22'/>
                        <h2 className='text22'>BIELSKO - BIALA</h2>
                        <div className='fix-l' />
                    </div>
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
